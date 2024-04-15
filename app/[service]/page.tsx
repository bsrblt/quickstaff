"use client";
import React, { useState, useEffect } from "react";
import HireSection from "@/components/layout/HireSection";
import { useSearchParams } from "next/navigation";
import getJobs from "@/components/utils/hooks/jobListings";
import ErrorPage from "../not-found";
import { Job } from "@/components/layout/AvailableJobs";

// interface Job {
//   jobTitle: string;
//   startDate: string;
//   endDate: string;
//   location: string;
//   experience: string;
//   details: string;
//   description: string;
// }

const ServicePage: React.FC = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("s") || "";
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedExp, setSelectedExp] = useState<string>("");
  const [jobs, setJobs] = useState<Job[]>([]);
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

  if (!services.includes(service.toLowerCase())) {
    console.log("Service not recognized. Redirecting.");
    return <ErrorPage />;
  }

  useEffect(() => {
    const fetchedJobs = getJobs(service);
    setJobs(fetchedJobs);
  }, [service]);

  const handleFormSubmit = (city: string, exp: string) => {
    setSelectedCity(city);
    setSelectedExp(exp);
  };

  return (
    <HireSection
      backgroundUrl={`/${service.toLowerCase()}.jpg`}
      hireWord={service}
      selectedCity={selectedCity}
      selectedExp={selectedExp}
      jobs={jobs}
      onFormSubmit={handleFormSubmit}
    />
  );
};

export default ServicePage;
