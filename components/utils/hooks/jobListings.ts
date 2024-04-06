const getJobs = (service: string) => {
  const jobListings = [
    {
      jobTitle: "Manager",
      startDate: "03/30/2024",
      endDate: "04/30/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced manager needed to oversee event operations and coordinate staff in Istanbul.",
    },
    {
      jobTitle: "Chef",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Talented chef specializing in Turkish cuisine required for upcoming event in Istanbul.",
    },

    {
      jobTitle: "Manager",
      startDate: "04/01/2024",
      endDate: "05/01/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Seasoned manager with extensive event planning experience sought for a high-profile event in London.",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Energetic and enthusiastic bartender wanted for a bustling event venue in London.",
    },

    {
      jobTitle: "Waiter",
      startDate: "04/05/2024",
      endDate: "05/05/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced waiter needed to provide exceptional service at an upcoming event in Madrid.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene standards at event venues in Madrid.",
    },

    {
      jobTitle: "Chauffeur",
      startDate: "04/08/2024",
      endDate: "05/08/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur familiar with the streets of Paris needed to transport VIPs for events.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Paris",
      experience: "10+ years",
      description:
        "Dynamic performer (singer, musician, etc.) sought to entertain guests at various events in Paris.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Seeking a proactive manager to lead our event team in Istanbul and ensure smooth operations.",
    },
    {
      jobTitle: "Chef",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced chef proficient in Mediterranean cuisine required for an upcoming event in Istanbul.",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic bartender needed to create and serve beverages at our event venue in Istanbul.",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Friendly and experienced waiter wanted to provide excellent customer service at events in Istanbul.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/05/2024",
      endDate: "05/05/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene at our event venues in Istanbul.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/12/2024",
      endDate: "05/12/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Experienced chauffeur with knowledge of Istanbul streets needed for VIP transportation.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/18/2024",
      endDate: "05/18/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Versatile performer (singer, musician, etc.) wanted to entertain guests at events in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "04/22/2024",
      endDate: "05/22/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Skilled technician needed to handle sound and lighting setup for events in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "04/28/2024",
      endDate: "05/28/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Entry-level technician wanted to assist with event setup and maintenance in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "05/01/2024",
      endDate: "06/01/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Experienced technician specializing in AV setup and troubleshooting needed for events in Istanbul.",
    },

    {
      jobTitle: "Manager",
      startDate: "04/05/2024",
      endDate: "05/05/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Dynamic manager sought to lead event planning and execution in the vibrant city of London.",
    },

    {
      jobTitle: "Waiter",
      startDate: "04/08/2024",
      endDate: "05/08/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced waiter required to provide exceptional service at events in the heart of Madrid.",
    },

    {
      jobTitle: "Chauffeur",
      startDate: "04/12/2024",
      endDate: "05/12/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to navigate the streets of Paris and ensure VIP transportation.",
    },

    {
      jobTitle: "Manager",
      startDate: "04/30/2024",
      endDate: "05/30/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Experienced manager with a proven track record in event planning and team leadership sought for Istanbul events.",
    },
    {
      jobTitle: "Chef",
      startDate: "05/05/2024",
      endDate: "06/05/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Highly skilled chef specializing in fusion cuisine required for prestigious events in Istanbul.",
    },
    {
      jobTitle: "Bartender",
      startDate: "05/10/2024",
      endDate: "06/10/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Talented bartender wanted to craft innovative cocktails at our events in Istanbul.",
    },
    {
      jobTitle: "Waiter",
      startDate: "05/15/2024",
      endDate: "06/15/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced waiter needed to provide exceptional service and enhance guest experience in Istanbul.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "05/20/2024",
      endDate: "06/20/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Dedicated cleaner required to maintain pristine event spaces in Istanbul.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "05/25/2024",
      endDate: "06/25/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Reliable chauffeur needed for safe and efficient transportation of guests in Istanbul.",
    },
    {
      jobTitle: "Performer",
      startDate: "06/01/2024",
      endDate: "07/01/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Versatile performer sought to captivate audiences with their talent at events in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "06/05/2024",
      endDate: "07/05/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Skilled technician needed to ensure flawless execution of audiovisual setups in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "06/10/2024",
      endDate: "07/10/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Technical expert wanted to provide support for event production needs in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "06/15/2024",
      endDate: "07/15/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Entry-level technician wanted to assist with setup and teardown of event equipment in Istanbul.",
    },

    {
      jobTitle: "Manager",
      startDate: "05/01/2024",
      endDate: "06/01/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Experienced manager needed to oversee event logistics and ensure client satisfaction in London.",
    },

    {
      jobTitle: "Waiter",
      startDate: "05/08/2024",
      endDate: "06/08/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Seasoned waiter required to deliver impeccable service at events hosted in Madrid.",
    },

    {
      jobTitle: "Chauffeur",
      startDate: "05/12/2024",
      endDate: "06/12/2024",
      location: "Paris",
      experience: "10+ years",
      description:
        "Experienced chauffeur needed to provide luxurious transportation services for VIPs in Paris.",
    },
    {
      jobTitle: "Manager",
      startDate: "06/20/2024",
      endDate: "07/20/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "We are seeking an energetic and ambitious individual to join our team as a junior manager for events in Istanbul.",
    },
    {
      jobTitle: "Chef",
      startDate: "06/25/2024",
      endDate: "07/25/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Dynamic chef needed to bring creativity and culinary expertise to our events in Istanbul.",
    },
    {
      jobTitle: "Bartender",
      startDate: "07/01/2024",
      endDate: "08/01/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced bartender wanted to curate a diverse selection of drinks for our guests in Istanbul.",
    },
    {
      jobTitle: "Waiter",
      startDate: "07/05/2024",
      endDate: "08/05/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Highly skilled waiter needed to provide VIP service and ensure guest satisfaction in Istanbul.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "07/10/2024",
      endDate: "08/10/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced cleaner required to maintain high standards of cleanliness at our event venues in Istanbul.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "07/15/2024",
      endDate: "08/15/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Reliable chauffeur needed to provide transportation services for guests and clients in Istanbul.",
    },
    {
      jobTitle: "Performer",
      startDate: "07/20/2024",
      endDate: "08/20/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Talented performer sought to entertain audiences with their unique skills at events in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "07/25/2024",
      endDate: "08/25/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Expert technician needed to manage technical aspects of events and ensure smooth operation in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "08/01/2024",
      endDate: "09/01/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Skilled technician required to provide technical support and troubleshooting for events in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "08/05/2024",
      endDate: "09/05/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Detail-oriented technician wanted to ensure seamless execution of audiovisual setups in Istanbul.",
    },

    {
      jobTitle: "Manager",
      startDate: "06/30/2024",
      endDate: "07/30/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "We are seeking a dynamic manager to join our team and oversee event planning and execution in London.",
    },
    {
      jobTitle: "Chef",
      startDate: "07/05/2024",
      endDate: "08/05/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Experienced chef wanted to lead culinary operations and menu development for events in London.",
    },
    {
      jobTitle: "Bartender",
      startDate: "07/10/2024",
      endDate: "08/10/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "We are looking for a passionate bartender to join our team and deliver exceptional service in London.",
    },
    {
      jobTitle: "Waiter",
      startDate: "07/15/2024",
      endDate: "08/15/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Experienced waiter required to provide attentive service and ensure guest satisfaction in London.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "07/20/2024",
      endDate: "08/20/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Experienced cleaner needed to maintain cleanliness and hygiene standards at our event venues in London.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "07/25/2024",
      endDate: "08/25/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Reliable chauffeur needed to provide transportation services for clients and guests in London.",
    },
    {
      jobTitle: "Performer",
      startDate: "08/01/2024",
      endDate: "09/01/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Dynamic performer wanted to entertain audiences with their unique talents at events in London.",
    },
    {
      jobTitle: "Technician",
      startDate: "08/05/2024",
      endDate: "09/05/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Entry-level technician wanted to assist with technical setup and support for events in London.",
    },
    {
      jobTitle: "Technician",
      startDate: "08/10/2024",
      endDate: "09/10/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Expert technician needed to manage complex technical setups and ensure event success in London.",
    },
    {
      jobTitle: "Technician",
      startDate: "08/15/2024",
      endDate: "09/15/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Skilled technician required to handle audiovisual setup and equipment maintenance in London.",
    },

    {
      jobTitle: "Manager",
      startDate: "07/01/2024",
      endDate: "08/01/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Experienced manager sought to lead event planning and execution for high-profile events in Madrid.",
    },

    {
      jobTitle: "Manager",
      startDate: "07/05/2024",
      endDate: "08/05/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "We are seeking a seasoned manager to oversee event operations and ensure client satisfaction in Paris.",
    },

    {
      jobTitle: "Manager",
      startDate: "08/20/2024",
      endDate: "09/20/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced manager needed to oversee event logistics and team coordination in Istanbul.",
    },
    {
      jobTitle: "Chef",
      startDate: "08/25/2024",
      endDate: "09/25/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic chef wanted to bring fresh ideas and culinary flair to our events in Istanbul.",
    },
    {
      jobTitle: "Bartender",
      startDate: "09/01/2024",
      endDate: "10/01/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced bartender needed to create memorable drinking experiences for guests in Istanbul.",
    },
    {
      jobTitle: "Waiter",
      startDate: "09/05/2024",
      endDate: "10/05/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Seasoned waiter required to provide exceptional service and elevate guest experience in Istanbul.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "09/10/2024",
      endDate: "10/10/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Detail-oriented cleaner needed to ensure our event spaces in Istanbul are immaculate.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "09/15/2024",
      endDate: "10/15/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced chauffeur required to provide reliable transportation services for VIPs in Istanbul.",
    },
    {
      jobTitle: "Performer",
      startDate: "09/20/2024",
      endDate: "10/20/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Talented performer sought to entertain and engage audiences at events in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "09/25/2024",
      endDate: "10/25/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Expert technician needed to manage technical aspects and ensure flawless execution of events in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "10/01/2024",
      endDate: "11/01/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "We are seeking an entry-level technician to join our team and assist with event setups in Istanbul.",
    },
    {
      jobTitle: "Technician",
      startDate: "10/05/2024",
      endDate: "11/05/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Skilled technician wanted to manage audiovisual setups and technical equipment for events in Istanbul.",
    },

    {
      jobTitle: "Manager",
      startDate: "08/30/2024",
      endDate: "09/30/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Experienced manager sought to lead our event team and ensure successful outcomes in London.",
    },

    {
      jobTitle: "Manager",
      startDate: "09/01/2024",
      endDate: "10/01/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Dynamic manager wanted to oversee event planning and execution for diverse events in Madrid.",
    },

    {
      jobTitle: "Manager",
      startDate: "09/05/2024",
      endDate: "10/05/2024",
      location: "Paris",
      experience: "0-1 year",
      description:
        "We are seeking a motivated individual to join our team as a junior manager for events in Paris.",
    },

    {
      jobTitle: "Chef",
      startDate: "09/10/2024",
      endDate: "10/10/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced chef needed to lead our kitchen team and create exceptional culinary experiences for events in Madrid.",
    },
    {
      jobTitle: "Bartender",
      startDate: "09/15/2024",
      endDate: "10/15/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Creative bartender wanted to craft innovative cocktails and provide excellent customer service in Madrid.",
    },
    {
      jobTitle: "Waiter",
      startDate: "09/20/2024",
      endDate: "10/20/2024",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "We are seeking enthusiastic individuals to join our team as waiters and deliver outstanding service at events in Madrid.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "09/25/2024",
      endDate: "10/25/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene standards at our event venues in Madrid.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "10/01/2024",
      endDate: "11/01/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Experienced chauffeur needed to provide safe and reliable transportation services for VIPs in Madrid.",
    },
    {
      jobTitle: "Performer",
      startDate: "10/05/2024",
      endDate: "11/05/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Versatile performer sought to entertain and engage audiences with their talent at events in Madrid.",
    },
    {
      jobTitle: "Technician",
      startDate: "10/10/2024",
      endDate: "11/10/2024",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "Entry-level technician wanted to assist with technical setup and support for events in Madrid.",
    },
    {
      jobTitle: "Technician",
      startDate: "10/15/2024",
      endDate: "11/15/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Skilled technician required to handle audiovisual setups and technical equipment for events in Madrid.",
    },
    {
      jobTitle: "Technician",
      startDate: "10/20/2024",
      endDate: "11/20/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Expert technician needed to manage complex technical setups and ensure event success in Madrid.",
    },
    {
      jobTitle: "Technician",
      startDate: "10/25/2024",
      endDate: "11/25/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced technician wanted to provide technical support and troubleshooting for events in Madrid.",
    },
    {
      jobTitle: "Chef",
      startDate: "09/30/2024",
      endDate: "10/30/2024",
      location: "Paris",
      experience: "10+ years",
      description:
        "Renowned chef sought to lead our culinary team and deliver exceptional dining experiences for events in Paris.",
    },
    {
      jobTitle: "Bartender",
      startDate: "10/05/2024",
      endDate: "11/05/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Creative bartender wanted to craft artisanal cocktails and elevate the bar experience at events in Paris.",
    },
    {
      jobTitle: "Waiter",
      startDate: "10/10/2024",
      endDate: "11/10/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Experienced waiter required to provide exceptional service and ensure guest satisfaction at events in Paris.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "10/15/2024",
      endDate: "11/15/2024",
      location: "Paris",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner wanted to maintain cleanliness and hygiene standards at our event venues in Paris.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "10/20/2024",
      endDate: "11/20/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to provide luxury transportation services for VIPs in Paris.",
    },
    {
      jobTitle: "Performer",
      startDate: "10/25/2024",
      endDate: "11/25/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Talented performer wanted to entertain and engage audiences with their unique talents at events in Paris.",
    },
    {
      jobTitle: "Technician",
      startDate: "10/30/2024",
      endDate: "11/30/2024",
      location: "Paris",
      experience: "10+ years",
      description:
        "Expert technician needed to manage technical setups and ensure flawless execution of events in Paris.",
    },
    {
      jobTitle: "Technician",
      startDate: "11/05/2024",
      endDate: "12/05/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Skilled technician required to handle audiovisual setups and equipment maintenance for events in Paris.",
    },
    {
      jobTitle: "Technician",
      startDate: "11/10/2024",
      endDate: "12/10/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Experienced technician wanted to provide technical support and troubleshooting for events in Paris.",
    },
    {
      jobTitle: "Technician",
      startDate: "11/15/2024",
      endDate: "12/15/2024",
      location: "Paris",
      experience: "0-1 year",
      description:
        "Entry-level technician wanted to assist with technical setup and support for events in Paris.",
    },
  ];
  const filteredJobs = jobListings.filter(
    (job) => job.jobTitle.toLowerCase() === service.toLowerCase()
  );

  return filteredJobs;
};
export default getJobs;
