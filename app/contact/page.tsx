"use client";
import React, { useState } from "react";
import OfficeMap from "@/components/layout/OfficeMap";
import ContactForm from "@/components/layout/ContactForm";

const ContactPage = () => {
  const [selectedCity, setSelectedCity] = useState("default");

  const cityChangeHandler = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <section className="body-font relative h-screen">
        <OfficeMap city={selectedCity} />
        <ContactForm
          onCityChange={cityChangeHandler}
          selectedCity={selectedCity}
        />
      </section>
    </div>
  );
};

export default ContactPage;
