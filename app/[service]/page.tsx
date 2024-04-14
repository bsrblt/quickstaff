"use client";
import React, { useReducer, useEffect } from "react";
import HireSection from "@/components/layout/HireSection";
import { useSearchParams } from "next/navigation";
import getJobs from "@/components/utils/hooks/jobListings";
import ErrorPage from "../not-found";

interface Job {
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  experience: string;
  description: string;
}

interface State {
  selectedCity: string;
  selectedExp: string;
  jobs: Job[];
}

type Action =
  | { type: "SET_SELECTED_CITY"; payload: string }
  | { type: "SET_SELECTED_EXP"; payload: string }
  | { type: "SET_JOBS"; payload: Job[] };

const initialState: State = {
  selectedCity: "",
  selectedExp: "",
  jobs: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SELECTED_CITY":
      return { ...state, selectedCity: action.payload };
    case "SET_SELECTED_EXP":
      return { ...state, selectedExp: action.payload };
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
};

const ServicePage: React.FC = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("s") || "";
  const [state, dispatch] = useReducer(reducer, initialState);

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
    dispatch({ type: "SET_JOBS", payload: fetchedJobs });
  }, [service]);

  const handleFormSubmit = (city: string, exp: string) => {
    dispatch({ type: "SET_SELECTED_CITY", payload: city });
    dispatch({ type: "SET_SELECTED_EXP", payload: exp });
  };

  return (
    <HireSection
      backgroundUrl={`/${service.toLowerCase()}.jpg`}
      hireWord={service}
      selectedCity={state.selectedCity}
      selectedExp={state.selectedExp}
      jobs={state.jobs}
      onFormSubmit={handleFormSubmit}
    />
  );
};

export default ServicePage;
