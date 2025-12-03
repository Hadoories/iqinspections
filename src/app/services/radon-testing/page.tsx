import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { servicePageContent } from "@/data/servicePages";

export default function RadonTestingPage() {
  return <ServicePageLayout content={servicePageContent.radonTesting} />;
}

