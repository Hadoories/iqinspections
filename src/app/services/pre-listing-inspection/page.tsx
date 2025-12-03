import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { servicePageContent } from "@/data/servicePages";

export default function PreListingInspectionPage() {
  return <ServicePageLayout content={servicePageContent.preListing} />;
}

