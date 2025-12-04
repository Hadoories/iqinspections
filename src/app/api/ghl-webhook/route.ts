import { NextResponse } from "next/server";

const REQUIRED_FIELDS = ["name", "email", "phone"];

function normalizePayload(payload: Record<string, unknown>) {
  return Object.entries(payload).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value === undefined || value === null) {
      return acc;
    }

    if (Array.isArray(value)) {
      acc[key] = value.join(", ");
      return acc;
    }

    if (typeof value === "object") {
      acc[key] = JSON.stringify(value);
      return acc;
    }

    acc[key] = String(value);
    return acc;
  }, {});
}

export async function POST(request: Request) {
  try {
    const webhookUrl = process.env.GHL_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Missing GHL_WEBHOOK_URL environment variable");
      return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 });
    }

    const payload = await request.json();

    if (!payload || typeof payload !== "object") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const missingFields = REQUIRED_FIELDS.filter((field) => {
      const value = (payload as Record<string, unknown>)[field];
      return !value || (typeof value === "string" && !value.trim());
    });

    if (missingFields.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const normalizedPayload = {
      ...normalizePayload(payload as Record<string, unknown>),
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(normalizedPayload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("GHL webhook error:", errorBody);
      return NextResponse.json({ error: errorBody || "Failed to notify GoHighLevel" }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Unexpected webhook error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


