import { useSearchParams } from "next/navigation";
import HireSection from "@/components/layout/HireSection";
import Redirecting from "@/components/layout/Redirecting";

const ServicePage: React.FC = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("s") || "";

  const services = [
    "chef",
    "waiter",
    "chauffeur",
    "bartender",
    "manager",
    "performer",
    "technician",
    "cleaner",
  ];

  if (!services.includes(service as string)) {
    console.log("Service not recognized. Redirecting.");
    return <Redirecting />;
  }

  return (
    <HireSection
      backgroundUrl={`/${service.toLowerCase()}.jpg`}
      hireWord={service}
    />
  );
};

export default ServicePage;
