import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { servicePageContent } from "@/data/servicePages";

export default function SewerScopePage() {
  return <ServicePageLayout content={servicePageContent.sewerScope} />;
}

