import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { servicePageContent } from "@/data/servicePages";

export default function PoolInspectionPage() {
  return <ServicePageLayout content={servicePageContent.poolInspection} />;
}
