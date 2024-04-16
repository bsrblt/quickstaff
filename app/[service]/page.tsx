"use client";
import React, { useState, useEffect } from "react";
import HireSection from "@/components/layout/HireSection";
import { useSearchParams } from "next/navigation";
import ErrorPage from "../not-found";
import { Job } from "@/components/layout/AvailableJobs";
import getJobs from "@/components/utils/jobListings";
import { Staff } from "@/components/layout/AvailableStaff";
import getStaff from "@/components/utils/workerListings";

const ServicePage: React.FC = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("s") || "";
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedExp, setSelectedExp] = useState<string>("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [staff, setStaff] = useState<Staff[]>([]);

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
    const fetchedStaff = getStaff(service);
    setJobs(fetchedJobs);
    setStaff(fetchedStaff);
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
      staffList={staff}
      onFormSubmit={handleFormSubmit}
    />
  );
};

export default ServicePage;
