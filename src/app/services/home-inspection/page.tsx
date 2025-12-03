import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { servicePageContent } from "@/data/servicePages";

export default function HomeInspectionPage() {
  return <ServicePageLayout content={servicePageContent.homeInspection} />;
}

