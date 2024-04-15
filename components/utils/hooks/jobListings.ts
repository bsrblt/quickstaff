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
    {
      jobTitle: "Bartender",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Energetic bartender wanted for a bustling event venue in Istanbul.",
      details:
        "The bartender will create and serve beverages at a bustling event venue in Istanbul.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene standards at event venues in Madrid.",
      details:
        "The cleaner will maintain cleanliness and hygiene standards at event venues in Madrid.",
      collab: "solo",
    },
    {
      jobTitle: "Chauffeur",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur familiar with the streets of Paris needed to transport VIPs for events.",
      details: "The chauffeur will transport VIPs for events in Paris.",
      collab: "solo",
    },
    {
      jobTitle: "Performer",
      location: "London",
      experience: "10+ years",
      description:
        "Versatile performer sought to entertain guests at various events in London.",
      details:
        "The performer will entertain guests at various events in London.",
      collab: "solo",
    },
    {
      jobTitle: "Manager",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Seeking a proactive manager to lead our event team in Istanbul and ensure smooth operations.",
      details: "The manager will lead our event team in Istanbul.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Skilled technician required for technical support at events in Madrid.",
      details:
        "The technician will provide technical support at events in Madrid.",
      collab: "solo",
    },
    {
      jobTitle: "Waiter",
      location: "London",
      experience: "2-5 years",
      description:
        "Friendly and experienced waiter wanted to provide excellent customer service at events in London.",
      details:
        "The waiter will provide excellent customer service at events in London.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene at event venues in Istanbul.",
      details:
        "The cleaner will maintain cleanliness and hygiene at event venues in Istanbul.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      location: "London",
      experience: "0-1 year",
      description: "Energetic bartender wanted for a lively bar in London.",
      details:
        "The bartender will create and serve beverages at a lively bar in London.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Skilled technician required for technical support at events in Paris.",
      details:
        "The technician will provide technical support at events in Paris.",
      collab: "solo",
    },
    {
      jobTitle: "Chef",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced chef proficient in Spanish cuisine required for an event in Madrid.",
      details:
        "The chef will prepare exquisite Spanish dishes for an event in Madrid.",
      collab: "solo",
    },
    {
      jobTitle: "Waiter",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Friendly and experienced waiter wanted to provide excellent customer service at events in Istanbul.",
      details:
        "The waiter will provide excellent customer service at events in Istanbul.",
      collab: "teamwork",
    },
    {
      jobTitle: "Manager",
      location: "London",
      experience: "10+ years",
      description:
        "Experienced manager needed to oversee operations in a high-profile London venue.",
      details:
        "The manager will oversee operations in a high-profile London venue.",
      collab: "teamwork",
    },
    {
      jobTitle: "Performer",
      location: "Paris",
      experience: "10+ years",
      description:
        "Dynamic performer sought to entertain guests at various events in Paris.",
      details:
        "The performer will entertain guests at various events in Paris.",
      collab: "solo",
    },
    {
      jobTitle: "Cleaner",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness and hygiene at event venues in Madrid.",
      details:
        "The cleaner will maintain cleanliness and hygiene at event venues in Madrid.",
      collab: "solo",
    },
    {
      jobTitle: "Technician",
      location: "Istanbul",
      experience: "5-10 years",
      description:
        "Skilled technician required for technical setup and support at events in Istanbul.",
      details:
        "The technician will provide technical setup and support at events in Istanbul.",
      collab: "solo",
    },
    {
      jobTitle: "Chauffeur",
      location: "London",
      experience: "5-10 years",
      description:
        "Experienced chauffeur familiar with London's roads needed to transport VIPs for events.",
      details: "The chauffeur will transport VIPs for events in London.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "Enthusiastic bartender needed to serve drinks at an event venue in Madrid.",
      details: "The bartender will serve drinks at an event venue in Madrid.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chef",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "London",
      experience: "5-10 years",
      description: "Experienced chef needed for a prestigious event in London.",
      details:
        "The chef will prepare exquisite dishes for a prestigious event in London from April 20, 2024, to April 23, 2024. This role is suitable for chefs with 5-10 years of experience. The chef will work independently to create culinary masterpieces that impress event attendees.",
      collab: "solo",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Experienced waiter needed for a high-end restaurant in Paris.",
      details:
        "The waiter will provide exceptional service at a high-end restaurant in Paris from April 18, 2024, to April 21, 2024. This role requires 2-5 years of waitering experience. The waiter will work as part of a team to ensure guests have a memorable dining experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/12/2024",
      endDate: "04/15/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Experienced chauffeur needed for VIP transportation in Madrid.",
      details:
        "The chauffeur will provide VIP transportation in Madrid from April 12, 2024, to April 15, 2024. This role requires 10+ years of chauffeur experience. The chauffeur will work independently, ensuring VIPs are transported safely and comfortably.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic bartender needed for a lively bar in Istanbul.",
      details:
        "The bartender will create and serve beverages at a lively bar in Istanbul from April 15, 2024, to April 18, 2024. This role is suitable for enthusiastic candidates with 0-1 year of bartending experience. The bartender will work as part of a team, ensuring guests have a great time.",
      collab: "teamwork",
    },
    {
      jobTitle: "Manager",
      startDate: "04/08/2024",
      endDate: "04/11/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Experienced manager needed to oversee operations in a London hotel.",
      details:
        "The manager will oversee operations in a London hotel from April 8, 2024, to April 11, 2024. This position requires 5-10 years of management experience. The manager will work with a team to ensure smooth operations and exceptional guest experiences.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      startDate: "04/25/2024",
      endDate: "04/28/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Skilled technician needed to set up audiovisual equipment for events in Madrid.",
      details:
        "The technician will set up audiovisual equipment for events in Madrid from April 25, 2024, to April 28, 2024. This role is suitable for technicians with 5-10 years of experience. The technician will work as part of a team, ensuring that all technical aspects of the events run smoothly.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "Paris",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner needed to maintain cleanliness at event venues in Paris.",
      details:
        "The cleaner will maintain cleanliness at event venues in Paris from April 22, 2024, to April 25, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
      collab: "solo",
    },
    {
      jobTitle: "Performer",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Experienced performer sought to entertain guests at events in Madrid.",
      details:
        "The performer will entertain guests at events in Madrid from April 18, 2024, to April 21, 2024. This role is suitable for experienced performers with 10+ years of experience. The performer will work independently, captivating audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Manager",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Proactive manager needed to oversee event operations in Istanbul.",
      details:
        "The manager will oversee event operations in Istanbul from April 15, 2024, to April 18, 2024. This position requires 2-5 years of management experience. The manager will work with a team, coordinating staff and resources to ensure successful event execution.",
      collab: "teamwork",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/10/2024",
      endDate: "04/13/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Experienced bartender needed to serve drinks at a London pub.",
      details:
        "The bartender will serve drinks at a London pub from April 10, 2024, to April 13, 2024. This role is suitable for experienced bartenders with 2-5 years of experience. The bartender will work as part of a team, ensuring patrons have a pleasant experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chef",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic chef wanted to assist in food preparation for events in Istanbul.",
      details:
        "The chef will assist in food preparation for events in Istanbul from April 22, 2024, to April 25, 2024. This role is suitable for enthusiastic chefs with 0-1 year of experience. The chef will work as part of a team, collaborating with other kitchen staff to deliver delicious dishes.",
      collab: "teamwork",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Experienced waiter needed to provide exceptional service at a fine dining restaurant in London.",
      details:
        "The waiter will provide exceptional service at a fine dining restaurant in London from April 20, 2024, to April 23, 2024. This role requires 5-10 years of waitering experience. The waiter will work independently and as part of a team to ensure guests have a memorable dining experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced cleaner needed to maintain cleanliness at event venues in Madrid.",
      details:
        "The cleaner will maintain cleanliness at event venues in Madrid from April 18, 2024, to April 21, 2024. This role is suitable for experienced cleaners with 2-5 years of experience. The cleaner will work independently and collaboratively with other cleaning staff to ensure event venues are clean and presentable.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Paris",
      experience: "10+ years",
      description:
        "Experienced technician needed to set up and maintain audiovisual equipment for events in Paris.",
      details:
        "The technician will set up and maintain audiovisual equipment for events in Paris from April 15, 2024, to April 18, 2024. This role is suitable for experienced technicians with 10+ years of experience. The technician will work independently, ensuring that all technical aspects of the events run smoothly.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/12/2024",
      endDate: "04/15/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Experienced bartender needed to mix and serve drinks at a lively bar in Istanbul.",
      details:
        "The bartender will mix and serve drinks at a lively bar in Istanbul from April 12, 2024, to April 15, 2024. This role is suitable for experienced bartenders with 2-5 years of experience. The bartender will work as part of a team, ensuring guests have a great time.",
      collab: "teamwork",
    },
    {
      jobTitle: "Manager",
      startDate: "04/25/2024",
      endDate: "04/28/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced manager needed to oversee event operations in Madrid.",
      details:
        "The manager will oversee event operations in Madrid from April 25, 2024, to April 28, 2024. This position requires 5-10 years of management experience. The manager will work with a team, coordinating staff and resources to ensure successful event execution.",
      collab: "teamwork",
    },
    {
      jobTitle: "Performer",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Versatile performer wanted to entertain guests at various events in London.",
      details:
        "The performer will entertain guests at various events in London from April 22, 2024, to April 25, 2024. This role is suitable for versatile performers with 5-10 years of experience. The performer will work independently, captivating audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Technician",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Entry-level technician needed to assist in setting up audiovisual equipment for events in Istanbul.",
      details:
        "The technician will assist in setting up audiovisual equipment for events in Istanbul from April 20, 2024, to April 23, 2024. This role is suitable for entry-level technicians with 0-1 year of experience. The technician will work as part of a team, supporting senior technicians in ensuring the smooth running of events.",
      collab: "teamwork",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced waiter needed to provide excellent customer service at events in Madrid.",
      details:
        "The waiter will provide excellent customer service at events in Madrid from April 18, 2024, to April 21, 2024. This role requires 2-5 years of waitering experience. The waiter will work independently and as part of a team, ensuring guests have a pleasant dining experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Paris",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner needed to maintain cleanliness at event venues in Paris.",
      details:
        "The cleaner will maintain cleanliness at event venues in Paris from April 15, 2024, to April 18, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
      collab: "solo",
    },
    {
      jobTitle: "Chef",
      startDate: "04/25/2024",
      endDate: "04/28/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced chef needed to prepare gourmet meals for events in Madrid.",
      details:
        "The chef will prepare gourmet meals for events in Madrid from April 25, 2024, to April 28, 2024. This role is suitable for chefs with 5-10 years of experience. The chef will work independently, ensuring that culinary expectations are met and exceeded.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Experienced bartender needed to craft cocktails at a trendy bar in London.",
      details:
        "The bartender will craft cocktails at a trendy bar in London from April 22, 2024, to April 25, 2024. This role is suitable for experienced bartenders with 2-5 years of experience. The bartender will work independently and collaboratively, ensuring guests have a memorable experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Experienced technician needed to set up and troubleshoot audiovisual equipment for events in Madrid.",
      details:
        "The technician will set up and troubleshoot audiovisual equipment for events in Madrid from April 20, 2024, to April 23, 2024. This role is suitable for experienced technicians with 10+ years of experience. The technician will work independently, ensuring technical aspects are executed flawlessly.",
      collab: "solo",
    },
    {
      jobTitle: "Manager",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Proactive manager needed to oversee event logistics in Paris.",
      details:
        "The manager will oversee event logistics in Paris from April 18, 2024, to April 21, 2024. This position requires 2-5 years of management experience. The manager will work with a team, ensuring smooth operations and customer satisfaction.",
      collab: "teamwork",
    },
    {
      jobTitle: "Performer",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Dynamic performer sought to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 15, 2024, to April 18, 2024. This role is suitable for dynamic performers with 10+ years of experience. The performer will captivate audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Chef",
      startDate: "04/25/2024",
      endDate: "04/28/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced chef needed to prepare gourmet meals for events in Madrid.",
      details:
        "The chef will prepare gourmet meals for events in Madrid from April 25, 2024, to April 28, 2024. This role is suitable for chefs with 5-10 years of experience. The chef will work independently, ensuring that culinary expectations are met and exceeded.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Experienced bartender needed to craft cocktails at a trendy bar in London.",
      details:
        "The bartender will craft cocktails at a trendy bar in London from April 22, 2024, to April 25, 2024. This role is suitable for experienced bartenders with 2-5 years of experience. The bartender will work independently and collaboratively, ensuring guests have a memorable experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "Madrid",
      experience: "10+ years",
      description:
        "Experienced technician needed to set up and troubleshoot audiovisual equipment for events in Madrid.",
      details:
        "The technician will set up and troubleshoot audiovisual equipment for events in Madrid from April 20, 2024, to April 23, 2024. This role is suitable for experienced technicians with 10+ years of experience. The technician will work independently, ensuring technical aspects are executed flawlessly.",
      collab: "solo",
    },
    {
      jobTitle: "Manager",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Proactive manager needed to oversee event logistics in Paris.",
      details:
        "The manager will oversee event logistics in Paris from April 18, 2024, to April 21, 2024. This position requires 2-5 years of management experience. The manager will work with a team, ensuring smooth operations and customer satisfaction.",
      collab: "teamwork",
    },
    {
      jobTitle: "Performer",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Dynamic performer sought to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 15, 2024, to April 18, 2024. This role is suitable for dynamic performers with 10+ years of experience. The performer will captivate audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "Madrid",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner needed to maintain cleanliness at event venues in Madrid.",
      details:
        "The cleaner will maintain cleanliness at event venues in Madrid from April 22, 2024, to April 25, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
      collab: "solo",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "London",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to provide transportation services in London.",
      details:
        "The chauffeur will provide transportation services in London from April 20, 2024, to April 23, 2024. This role is suitable for experienced chauffeurs with 5-10 years of experience. The chauffeur will work independently, ensuring VIPs are transported safely and punctually.",
      collab: "solo",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Experienced cleaner needed to maintain cleanliness at event venues in Paris.",
      details:
        "The cleaner will maintain cleanliness at event venues in Paris from April 18, 2024, to April 21, 2024. This role is suitable for experienced cleaners with 2-5 years of experience. The cleaner will work independently and collaboratively with other cleaning staff to ensure event venues are clean and presentable.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "10+ years",
      description:
        "Experienced chauffeur needed for VIP transportation in Istanbul.",
      details:
        "The chauffeur will provide VIP transportation in Istanbul from April 15, 2024, to April 18, 2024. This role is suitable for experienced chauffeurs with 10+ years of experience. The chauffeur will work independently, ensuring VIPs are transported safely and comfortably.",
      collab: "solo",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/12/2024",
      endDate: "04/15/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner needed to maintain cleanliness at event venues in Istanbul.",
      details:
        "The cleaner will maintain cleanliness at event venues in Istanbul from April 12, 2024, to April 15, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
      collab: "solo",
    },
    {
      jobTitle: "Manager",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced manager needed to oversee event operations in Madrid.",
      details:
        "The manager will oversee event operations in Madrid from April 22, 2024, to April 25, 2024. This position requires 5-10 years of management experience. The manager will work with a team, coordinating staff and resources to ensure successful event execution.",
      collab: "teamwork",
    },
    {
      jobTitle: "Performer",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Dynamic performer sought to entertain guests at events in London.",
      details:
        "The performer will entertain guests at events in London from April 20, 2024, to April 23, 2024. This role is suitable for dynamic performers with 10+ years of experience. The performer will captivate audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Technician",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Experienced technician needed to set up audiovisual equipment for events in Paris.",
      details:
        "The technician will set up audiovisual equipment for events in Paris from April 18, 2024, to April 21, 2024. This role is suitable for experienced technicians with 2-5 years of experience. The technician will work independently and as part of a team, ensuring technical aspects are executed flawlessly.",
      collab: "teamwork",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic bartender needed to create and serve beverages at events in Istanbul.",
      details:
        "The bartender will create and serve beverages at events in Istanbul from April 15, 2024, to April 18, 2024. This role is suitable for enthusiastic candidates with 0-1 year of bartending experience. The bartender will work as part of a team, ensuring guests have a great time.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/12/2024",
      endDate: "04/15/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 12, 2024, to April 15, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
      collab: "solo",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/10/2024",
      endDate: "04/13/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Experienced waiter needed to provide exceptional service at events in Madrid.",
      details:
        "The waiter will provide exceptional service at events in Madrid from April 10, 2024, to April 13, 2024. This role requires 2-5 years of waitering experience. The waiter will work independently and as part of a team, ensuring guests have a memorable dining experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/08/2024",
      endDate: "04/11/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to provide transportation services in Paris.",
      details:
        "The chauffeur will provide transportation services in Paris from April 8, 2024, to April 11, 2024. This role is suitable for experienced chauffeurs with 5-10 years of experience. The chauffeur will work independently, ensuring VIPs are transported safely and punctually.",
      collab: "solo",
    },
    {
      jobTitle: "Performer",
      startDate: "04/05/2024",
      endDate: "04/08/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Versatile performer wanted to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 5, 2024, to April 8, 2024. This role is suitable for versatile performers with 2-5 years of experience. The performer will captivate audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Technician",
      startDate: "04/02/2024",
      endDate: "04/05/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Skilled technician needed to set up audiovisual equipment for events in London.",
      details:
        "The technician will set up audiovisual equipment for events in London from April 2, 2024, to April 5, 2024. This role is suitable for skilled technicians with 10+ years of experience. The technician will work independently, ensuring technical aspects are executed flawlessly.",
      collab: "solo",
    },
    {
      jobTitle: "Chef",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced chef needed to prepare gourmet meals for events in Madrid.",
      details:
        "The chef will prepare gourmet meals for events in Madrid from April 22, 2024, to April 25, 2024. This role is suitable for chefs with 5-10 years of experience. The chef will work independently, ensuring that culinary expectations are met and exceeded.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Experienced bartender needed to craft cocktails at a trendy bar in London.",
      details:
        "The bartender will craft cocktails at a trendy bar in London from April 20, 2024, to April 23, 2024. This role is suitable for experienced bartenders with 2-5 years of experience. The bartender will work independently and collaboratively, ensuring guests have a memorable experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Experienced technician needed to set up audiovisual equipment for events in Paris.",
      details:
        "The technician will set up audiovisual equipment for events in Paris from April 18, 2024, to April 21, 2024. This role is suitable for experienced technicians with 2-5 years of experience. The technician will work independently and as part of a team, ensuring technical aspects are executed flawlessly.",
      collab: "teamwork",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic waiter needed to provide exceptional service at events in Istanbul.",
      details:
        "The waiter will provide exceptional service at events in Istanbul from April 15, 2024, to April 18, 2024. This role is suitable for enthusiastic candidates with 0-1 year of waitering experience. The waiter will work as part of a team, ensuring guests have a great time.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/12/2024",
      endDate: "04/15/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 12, 2024, to April 15, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
      collab: "solo",
    },
    {
      jobTitle: "Manager",
      startDate: "04/10/2024",
      endDate: "04/13/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Proactive manager needed to oversee event logistics in Madrid.",
      details:
        "The manager will oversee event logistics in Madrid from April 10, 2024, to April 13, 2024. This position requires 2-5 years of management experience. The manager will work with a team, ensuring smooth operations and customer satisfaction.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/08/2024",
      endDate: "04/11/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to provide transportation services in Paris.",
      details:
        "The chauffeur will provide transportation services in Paris from April 8, 2024, to April 11, 2024. This role is suitable for experienced chauffeurs with 5-10 years of experience. The chauffeur will work independently, ensuring VIPs are transported safely and punctually.",
      collab: "solo",
    },
    {
      jobTitle: "Performer",
      startDate: "04/05/2024",
      endDate: "04/08/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Versatile performer wanted to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 5, 2024, to April 8, 2024. This role is suitable for versatile performers with 2-5 years of experience. The performer will captivate audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/02/2024",
      endDate: "04/05/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Experienced cleaner needed to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 2, 2024, to April 5, 2024. This role is suitable for experienced cleaners with 10+ years of experience. The cleaner will work independently and collaboratively with other cleaning staff to ensure event venues are clean and presentable.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chef",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced chef needed to prepare gourmet meals for events in Madrid.",
      details:
        "The chef will prepare gourmet meals for events in Madrid from April 22, 2024, to April 25, 2024. This role is suitable for chefs with 5-10 years of experience. The chef will work independently, ensuring that culinary expectations are met and exceeded.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Experienced bartender needed to craft cocktails at a trendy bar in London.",
      details:
        "The bartender will craft cocktails at a trendy bar in London from April 20, 2024, to April 23, 2024. This role is suitable for experienced bartenders with 2-5 years of experience. The bartender will work independently and collaboratively, ensuring guests have a memorable experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Experienced technician needed to set up audiovisual equipment for events in Paris.",
      details:
        "The technician will set up audiovisual equipment for events in Paris from April 18, 2024, to April 21, 2024. This role is suitable for experienced technicians with 2-5 years of experience. The technician will work independently and as part of a team, ensuring technical aspects are executed flawlessly.",
      collab: "teamwork",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic waiter needed to provide exceptional service at events in Istanbul.",
      details:
        "The waiter will provide exceptional service at events in Istanbul from April 15, 2024, to April 18, 2024. This role is suitable for enthusiastic candidates with 0-1 year of waitering experience. The waiter will work as part of a team, ensuring guests have a great time.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/12/2024",
      endDate: "04/15/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 12, 2024, to April 15, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
      collab: "solo",
    },
    {
      jobTitle: "Manager",
      startDate: "04/10/2024",
      endDate: "04/13/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Proactive manager needed to oversee event logistics in Madrid.",
      details:
        "The manager will oversee event logistics in Madrid from April 10, 2024, to April 13, 2024. This position requires 2-5 years of management experience. The manager will work with a team, ensuring smooth operations and customer satisfaction.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/08/2024",
      endDate: "04/11/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to provide transportation services in Paris.",
      details:
        "The chauffeur will provide transportation services in Paris from April 8, 2024, to April 11, 2024. This role is suitable for experienced chauffeurs with 5-10 years of experience. The chauffeur will work independently, ensuring VIPs are transported safely and punctually.",
      collab: "solo",
    },
    {
      jobTitle: "Performer",
      startDate: "04/05/2024",
      endDate: "04/08/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Versatile performer wanted to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 5, 2024, to April 8, 2024. This role is suitable for versatile performers with 2-5 years of experience. The performer will captivate audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/02/2024",
      endDate: "04/05/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Experienced cleaner needed to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 2, 2024, to April 5, 2024. This role is suitable for experienced cleaners with 10+ years of experience. The cleaner will work independently and collaboratively with other cleaning staff to ensure event venues are clean and presentable.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chef",
      startDate: "04/22/2024",
      endDate: "04/25/2024",
      location: "Madrid",
      experience: "5-10 years",
      description:
        "Experienced chef needed to prepare gourmet meals for events in Madrid.",
      details:
        "The chef will prepare gourmet meals for events in Madrid from April 22, 2024, to April 25, 2024. This role is suitable for chefs with 5-10 years of experience. The chef will work independently, ensuring that culinary expectations are met and exceeded.",
      collab: "solo",
    },
    {
      jobTitle: "Bartender",
      startDate: "04/20/2024",
      endDate: "04/23/2024",
      location: "London",
      experience: "2-5 years",
      description:
        "Experienced bartender needed to craft cocktails at a trendy bar in London.",
      details:
        "The bartender will craft cocktails at a trendy bar in London from April 20, 2024, to April 23, 2024. This role is suitable for experienced bartenders with 2-5 years of experience. The bartender will work independently and collaboratively, ensuring guests have a memorable experience.",
      collab: "teamwork",
    },
    {
      jobTitle: "Technician",
      startDate: "04/18/2024",
      endDate: "04/21/2024",
      location: "Paris",
      experience: "2-5 years",
      description:
        "Experienced technician needed to set up audiovisual equipment for events in Paris.",
      details:
        "The technician will set up audiovisual equipment for events in Paris from April 18, 2024, to April 21, 2024. This role is suitable for experienced technicians with 2-5 years of experience. The technician will work independently and as part of a team, ensuring technical aspects are executed flawlessly.",
      collab: "teamwork",
    },
    {
      jobTitle: "Waiter",
      startDate: "04/15/2024",
      endDate: "04/18/2024",
      location: "Istanbul",
      experience: "0-1 year",
      description:
        "Enthusiastic waiter needed to provide exceptional service at events in Istanbul.",
      details:
        "The waiter will provide exceptional service at events in Istanbul from April 15, 2024, to April 18, 2024. This role is suitable for enthusiastic candidates with 0-1 year of waitering experience. The waiter will work as part of a team, ensuring guests have a great time.",
      collab: "teamwork",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/12/2024",
      endDate: "04/15/2024",
      location: "London",
      experience: "0-1 year",
      description:
        "Detail-oriented cleaner required to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 12, 2024, to April 15, 2024. This role is suitable for detail-oriented candidates with 0-1 year of cleaning experience. The cleaner will work independently, ensuring event venues are clean and presentable throughout the events.",
      collab: "solo",
    },
    {
      jobTitle: "Manager",
      startDate: "04/10/2024",
      endDate: "04/13/2024",
      location: "Madrid",
      experience: "2-5 years",
      description:
        "Proactive manager needed to oversee event logistics in Madrid.",
      details:
        "The manager will oversee event logistics in Madrid from April 10, 2024, to April 13, 2024. This position requires 2-5 years of management experience. The manager will work with a team, ensuring smooth operations and customer satisfaction.",
      collab: "teamwork",
    },
    {
      jobTitle: "Chauffeur",
      startDate: "04/08/2024",
      endDate: "04/11/2024",
      location: "Paris",
      experience: "5-10 years",
      description:
        "Experienced chauffeur needed to provide transportation services in Paris.",
      details:
        "The chauffeur will provide transportation services in Paris from April 8, 2024, to April 11, 2024. This role is suitable for experienced chauffeurs with 5-10 years of experience. The chauffeur will work independently, ensuring VIPs are transported safely and punctually.",
      collab: "solo",
    },
    {
      jobTitle: "Performer",
      startDate: "04/05/2024",
      endDate: "04/08/2024",
      location: "Istanbul",
      experience: "2-5 years",
      description:
        "Versatile performer wanted to entertain guests at events in Istanbul.",
      details:
        "The performer will entertain guests at events in Istanbul from April 5, 2024, to April 8, 2024. This role is suitable for versatile performers with 2-5 years of experience. The performer will captivate audiences with their talent and stage presence.",
      collab: "solo",
    },
    {
      jobTitle: "Cleaner",
      startDate: "04/02/2024",
      endDate: "04/05/2024",
      location: "London",
      experience: "10+ years",
      description:
        "Experienced cleaner needed to maintain cleanliness at event venues in London.",
      details:
        "The cleaner will maintain cleanliness at event venues in London from April 2, 2024, to April 5, 2024. This role is suitable for experienced cleaners with 10+ years of experience. The cleaner will work independently and collaboratively with other cleaning staff to ensure event venues are clean and presentable.",
      collab: "teamwork",
    },
  ];
  const filteredJobs = jobListings.filter(
    (job) => job.jobTitle.toLowerCase() === service.toLowerCase()
  );

  return filteredJobs;
};
export default getJobs;
