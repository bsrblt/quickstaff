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
      details:
        "The manager will be responsible for overseeing all aspects of event operations in Istanbul from March 30, 2024, to April 30, 2024. This position requires a candidate with 5-10 years of relevant experience in event management. The manager will work closely with a team of event staff and coordinate their efforts to ensure the successful execution of the event.",
    },
    {
      jobTitle: "Chef",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Talented chef specializing in Turkish cuisine required for upcoming event in Istanbul.",
      details:
        "The chef will be responsible for creating and preparing authentic Turkish cuisine dishes for an upcoming event in Istanbul from April 15, 2024, to May 15, 2024. Candidates with 2-5 years of experience in culinary arts, particularly in Turkish cuisine, are encouraged to apply. This role may involve working independently in the kitchen, but collaboration with other kitchen staff may also be required.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/01/2024",
      endDate: "05/01/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Seasoned manager with extensive event planning experience sought for a high-profile event in London.",
      details:
        "The manager will lead the planning and execution of a high-profile event in London from April 1, 2024, to May 1, 2024. This role requires a seasoned professional with over 10 years of experience in event management and planning. The manager will work closely with a team of event planners, coordinators, and vendors to ensure the seamless organization and execution of the event.",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Energetic and enthusiastic bartender wanted for a bustling event venue in London.",
      details:
        "The bartender will be responsible for creating and serving beverages at a bustling event venue in London from April 10, 2024, to May 10, 2024. This role is suitable for candidates with 0-1 year of bartending experience. The bartender will work as part of a team to ensure guests receive prompt and friendly service throughout the event.",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/05/2024",
      endDate: "05/05/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced waiter needed to provide exceptional service at an upcoming event in Madrid.",
      details:
        "The waiter will provide exceptional service at an upcoming event in Madrid from April 5, 2024, to May 5, 2024. This role requires 2-5 years of experience in waitering. The waiter will work independently and as part of a team to ensure guests receive top-notch service throughout the event.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene standards at event venues in Madrid.",
      details:
        "The cleaner will maintain cleanliness and hygiene standards at event venues in Madrid from April 20, 2024, to May 20, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently to ensure event venues are clean and presentable throughout the event.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/08/2024",
      endDate: "05/08/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur familiar with the streets of Paris needed to transport VIPs for events.",
      details:
        "The chauffeur will transport VIPs for events in Paris from April 8, 2024, to May 8, 2024. This role requires 5-10 years of experience as a chauffeur. The chauffeur will work independently, ensuring the safe and timely transportation of VIPs to and from event venues.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Paris",
      experience: "10+ years",
      description:
        "Dynamic performer (singer, musician, etc.) sought to entertain guests at various events in Paris.",
      details:
        "The performer will entertain guests at various events in Paris from April 25, 2024, to May 25, 2024. This role is suitable for dynamic performers with 10+ years of experience in singing, music, or other forms of entertainment. The performer will work independently, captivating audiences with their talent and stage presence.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Seeking a proactive manager to lead our event team in Istanbul and ensure smooth operations.",
      details:
        "The manager will lead the event team in Istanbul from April 10, 2024, to May 10, 2024. This role requires 2-5 years of experience in management. The manager will work with a team to ensure smooth operations, coordinating staff and resources to deliver successful events.",
    },
    {
      jobTitle: "Chef",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced chef proficient in Mediterranean cuisine required for an upcoming event in Istanbul.",
      details:
        "The chef will prepare Mediterranean cuisine for an event in Istanbul from April 15, 2024, to May 15, 2024. This role is suitable for chefs with 5-10 years of experience. The chef will work both independently and collaboratively to create exquisite dishes that delight event attendees.",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic bartender needed to create and serve beverages at our event venue in Istanbul.",
      details:
        "The bartender will create and serve beverages at an event venue in Istanbul from April 20, 2024, to May 20, 2024. This role is suitable for enthusiastic candidates with 0-1 year of bartending experience. The bartender will work as part of a team to ensure guests enjoy their drinks throughout the event.",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Friendly and experienced waiter wanted to provide excellent customer service at events in Istanbul.",
      details:
        "The waiter will provide excellent customer service at events in Istanbul from April 25, 2024, to May 25, 2024. This role requires 2-5 years of waitering experience. The waiter will work independently and as part of a team, ensuring guests have a pleasant dining experience.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/05/2024",
      endDate: "05/05/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene at our event venues in Istanbul.",
      details:
        "The cleaner will maintain cleanliness and hygiene at event venues in Istanbul from April 5, 2024, to May 5, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the event.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/12/2024",
      endDate: "05/12/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Experienced chauffeur with knowledge of Istanbul streets needed for VIP transportation.",
      details:
        "The chauffeur will transport VIPs in Istanbul from April 12, 2024, to May 12, 2024. This role requires 10+ years of chauffeur experience. The chauffeur will work independently, ensuring VIPs are transported safely and comfortably to their destinations.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/18/2024",
      endDate: "05/18/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Versatile performer (singer, musician, etc.) wanted to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 18, 2024, to May 18, 2024. This role is suitable for versatile performers with 5-10 years of experience in singing, music, or other forms of entertainment. The performer will captivate audiences with their talent and stage presence.",
    },
    {
      jobTitle: "Technician",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Skilled technician needed to manage audiovisual equipment at events in Madrid.",
      details:
        "The technician will manage audiovisual equipment at events in Madrid from April 10, 2024, to May 10, 2024. This role requires 5-10 years of experience in technical support. The technician will work independently to ensure the smooth operation of audiovisual equipment throughout the events.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Paris",
      experience: "10+ years",
      description:
        "Experienced manager sought to oversee event operations in Paris.",
      details:
        "The manager will oversee event operations in Paris from April 15, 2024, to May 15, 2024. This role requires over 10 years of experience in event management. The manager will work with a team to ensure the successful execution of events, coordinating staff and resources as needed.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Talented performer needed to entertain guests at events in London.",
      details:
        "The performer will entertain guests at events in London from April 20, 2024, to May 20, 2024. This role is suitable for performers with 2-5 years of experience in singing, music, or other forms of entertainment. The performer will captivate audiences with their talent and stage presence.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene at event venues in Istanbul.",
      details:
        "The cleaner will maintain cleanliness and hygiene at event venues in Istanbul from April 25, 2024, to May 25, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the event.",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/30/2024",
      endDate: "05/30/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Experienced waiter wanted to provide exceptional service at events in Madrid.",
      details:
        "The waiter will provide exceptional service at events in Madrid from April 30, 2024, to May 30, 2024. This role requires over 10 years of experience in waitering. The waiter will work independently and as part of a team, ensuring guests have a pleasant dining experience.",
    },

    {
      jobTitle: "Chef",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chef needed to prepare gourmet cuisine for events in Paris.",
      details:
        "The chef will prepare gourmet cuisine for events in Paris from April 10, 2024, to May 10, 2024. This role requires 5-10 years of experience in culinary arts. The chef will work independently and collaboratively to create exquisite dishes that meet the standards of the events.",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Friendly and experienced waiter wanted to provide excellent service at events in London.",
      details:
        "The waiter will provide excellent service at events in London from April 15, 2024, to May 15, 2024. This role is suitable for candidates with 2-5 years of waitering experience. The waiter will work independently and as part of a team to ensure guests have a memorable experience.",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "Enthusiastic bartender needed to create cocktails at events in Madrid.",
      details:
        "The bartender will create cocktails at events in Madrid from April 20, 2024, to May 20, 2024. This role is suitable for enthusiastic candidates with 0-1 year of bartending experience. The bartender will work as part of a team to ensure guests enjoy their drinks throughout the events.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Experienced manager sought to oversee event operations in Istanbul.",
      details:
        "The manager will oversee event operations in Istanbul from April 25, 2024, to May 25, 2024. This role requires over 10 years of experience in event management. The manager will work with a team to ensure the successful execution of events, coordinating staff and resources as needed.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/30/2024",
      endDate: "05/30/2024",
      location: "Paris",
      experience: "10+ years",
      description:
        "Experienced performer wanted to entertain guests at events in Paris.",
      details:
        "The performer will entertain guests at events in Paris from April 30, 2024, to May 30, 2024. This role requires over 10 years of experience in performing arts. The performer will captivate audiences with their talent and stage presence.",
    },
    {
      jobTitle: "Technician",
      startDate: "04/05/2024",
      endDate: "05/05/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Entry-level technician needed to assist with audiovisual setup at events in London.",
      details:
        "The technician will assist with audiovisual setup at events in London from April 5, 2024, to May 5, 2024. This role is suitable for entry-level candidates with 0-1 year of experience in technical support. The technician will work under the guidance of senior staff to ensure the smooth operation of audiovisual equipment.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced cleaner required to maintain cleanliness at event venues in Madrid.",
      details:
        "The cleaner will maintain cleanliness at event venues in Madrid from April 10, 2024, to May 10, 2024. This role is suitable for candidates with 2-5 years of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to transport guests to and from events in Istanbul.",
      details:
        "The chauffeur will transport guests to and from events in Istanbul from April 15, 2024, to May 15, 2024. This role requires 5-10 years of experience as a chauffeur. The chauffeur will work independently, ensuring guests are transported safely and comfortably.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "Paris",
      experience: "2-5 years",
      description: "Dynamic manager needed to coordinate events in Paris.",
      details:
        "The manager will coordinate events in Paris from April 20, 2024, to May 20, 2024. This role is suitable for candidates with 2-5 years of experience in event management. The manager will work with a team to ensure the successful execution of events, overseeing logistics and coordinating staff as needed.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Versatile performer wanted to entertain guests at events in London.",
      details:
        "The performer will entertain guests at events in London from April 25, 2024, to May 25, 2024. This role is suitable for versatile performers with 5-10 years of experience in singing, music, or other forms of entertainment. The performer will captivate audiences with their talent and stage presence.",
    },
    {
      jobTitle: "Chef",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced chef needed to create culinary delights for events in Madrid.",
      details:
        "The chef will create culinary delights for events in Madrid from April 10, 2024, to May 10, 2024. This role requires 2-5 years of experience in culinary arts. The chef will work independently and collaboratively to deliver high-quality dishes that satisfy event attendees.",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Paris",
      experience: "0-1 year",
      description:
        "Enthusiastic waiter wanted to provide exceptional service at events in Paris.",
      details:
        "The waiter will provide exceptional service at events in Paris from April 15, 2024, to May 15, 2024. This role is suitable for enthusiastic candidates with 0-1 year of waitering experience. The waiter will work independently and as part of a team to ensure guests have a memorable experience.",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Experienced bartender needed to craft cocktails at events in London.",
      details:
        "The bartender will craft cocktails at events in London from April 20, 2024, to May 20, 2024. This role requires 5-10 years of bartending experience. The bartender will work independently and as part of a team to ensure guests enjoy high-quality beverages throughout the events.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Seasoned manager sought to lead event operations in Istanbul.",
      details:
        "The manager will lead event operations in Istanbul from April 25, 2024, to May 25, 2024. This role requires over 10 years of experience in event management. The manager will work with a team to ensure the successful execution of events, overseeing logistics and coordinating staff as needed.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/30/2024",
      endDate: "05/30/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Experienced performer wanted to entertain guests at events in Madrid.",
      details:
        "The performer will entertain guests at events in Madrid from April 30, 2024, to May 30, 2024. This role requires over 10 years of experience in performing arts. The performer will captivate audiences with their talent and stage presence.",
    },
    {
      jobTitle: "Technician",
      startDate: "04/05/2024",
      endDate: "05/05/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Skilled technician needed to manage audiovisual equipment at events in Istanbul.",
      details:
        "The technician will manage audiovisual equipment at events in Istanbul from April 5, 2024, to May 5, 2024. This role requires 2-5 years of experience in technical support. The technician will work independently to ensure the smooth operation of audiovisual equipment throughout the events.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 10, 2024, to May 10, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to transport guests for events in Paris.",
      details:
        "The chauffeur will transport guests for events in Paris from April 15, 2024, to May 15, 2024. This role requires 5-10 years of experience as a chauffeur. The chauffeur will work independently, ensuring guests are transported safely and comfortably.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "Madrid",
      experience: "2-5 years",
      description: "Proactive manager wanted to coordinate events in Madrid.",
      details:
        "The manager will coordinate events in Madrid from April 20, 2024, to May 20, 2024. This role is suitable for candidates with 2-5 years of experience in event management. The manager will work with a team to ensure the successful execution of events, overseeing logistics and coordinating staff as needed.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Versatile performer wanted to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 25, 2024, to May 25, 2024. This role is suitable for versatile performers with 5-10 years of experience in singing, music, or other forms of entertainment. The performer will captivate audiences with their talent and stage presence.",
    },
    {
      jobTitle: "Chef",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced chef needed to create exquisite dishes for events in Madrid.",
      details:
        "The chef will be responsible for creating exquisite dishes for events in Madrid from April 10, 2024, to May 10, 2024. This role requires 2-5 years of experience in culinary arts. The chef will work independently and collaboratively to deliver high-quality cuisine.",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Paris",
      experience: "0-1 year",
      description:
        "Enthusiastic waiter wanted to provide exceptional service at events in Paris.",
      details:
        "The waiter will provide exceptional service at events in Paris from April 15, 2024, to May 15, 2024. This role is suitable for enthusiastic individuals with 0-1 year of waitering experience. The waiter will work diligently to ensure guests have a memorable dining experience.",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Experienced bartender needed to craft cocktails at events in London.",
      details:
        "The bartender will craft cocktails at events in London from April 20, 2024, to May 20, 2024. This role requires 5-10 years of bartending experience. The bartender will work independently and collaboratively to ensure guests enjoy high-quality beverages.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Experienced manager sought to oversee event operations in Istanbul.",
      details:
        "The manager will oversee event operations in Istanbul from April 25, 2024, to May 25, 2024. This role requires over 10 years of experience in event management. The manager will lead a team to ensure successful event execution.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/30/2024",
      endDate: "05/30/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Dynamic performer wanted to entertain guests at events in Madrid.",
      details:
        "The performer will entertain guests at events in Madrid from April 30, 2024, to May 30, 2024. This role requires over 10 years of experience in performing arts. The performer will captivate audiences with their talent and charisma.",
    },
    {
      jobTitle: "Technician",
      startDate: "04/05/2024",
      endDate: "05/05/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Skilled technician needed to manage audiovisual equipment at events in Istanbul.",
      details:
        "The technician will manage audiovisual equipment at events in Istanbul from April 5, 2024, to May 5, 2024. This role requires 2-5 years of experience in technical support. The technician will ensure seamless operation of audiovisual systems.",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/10/2024",
      endDate: "05/10/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner needed to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 10, 2024, to May 10, 2024. This role is suitable for detail-oriented individuals with 0-1 year of cleaning experience. The cleaner will ensure venues are tidy and presentable.",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/15/2024",
      endDate: "05/15/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to provide transportation for guests in Paris.",
      details:
        "The chauffeur will provide transportation for guests in Paris from April 15, 2024, to May 15, 2024. This role requires 5-10 years of experience as a chauffeur. The chauffeur will ensure safe and comfortable travel for clients.",
    },
    {
      jobTitle: "Manager",
      startDate: "04/20/2024",
      endDate: "05/20/2024",
      location: "Madrid",
      experience: "2-5 years",
      description: "Proactive manager needed to coordinate events in Madrid.",
      details:
        "The manager will coordinate events in Madrid from April 20, 2024, to May 20, 2024. This role is suitable for individuals with 2-5 years of experience in event management. The manager will oversee event logistics and team coordination.",
    },
    {
      jobTitle: "Performer",
      startDate: "04/25/2024",
      endDate: "05/25/2024",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Versatile performer wanted to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 25, 2024, to May 25, 2024. This role is suitable for versatile performers with 5-10 years of experience in various forms of entertainment. The performer will engage and captivate the audience.",
    },
  ];
  const filteredJobs = jobListings.filter(
    (job) => job.jobTitle.toLowerCase() === service.toLowerCase()
  );

  return filteredJobs;
};
export default getJobs;
