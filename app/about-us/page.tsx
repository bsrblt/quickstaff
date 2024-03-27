import React from "react";
import MainTitle from "@/components/layout/MainTitle";
import GlassCard from "@/components/layout/GlassCard";
import Link from "next/link";

const maintitle = (
  <div className="flex h-[10%] sm:my-[4rem] my-1 mx-2 justify-end items-end ">
    <MainTitle
      textBig={
        <h1 className="text-white lg:text-[6rem] xl:text-[rem] md:text-7xl sm:text-6xl text-5xl font-bold drop-shadow-xl backdrop-blur-[2px] fontpop-4">
          Welcome to <span className="text-color2 fontpop-1"> QuickStaff</span>!
        </h1>
      }
      textSmall={
        <h1 className="text-white lg:text-[2.5rem] md:text-3xl text-xl font-bold  backdrop-blur-[2px] drop-shadow-xl mt-4 md:pb-[3.3rem] pb-[1.3rem] antialiased fontpop-2 tracking-tight pl-1 fontpop-4">
          Your premier destination for all your event staffing needs.
        </h1>
      }
    />
  </div>
);

const AboutUs = () => {
  return (
    <main
      id="parallaxBackground"
      className="flex flex-col h-full items-center justify-center "
    >
      <section
        className="flex flex-col w-full min-h-screen bg-cover bg-fixed bg-center justify-start items-center"
        style={{
          backgroundImage: "url(/office3.jpg)",
        }}
      >
        {maintitle}
        <div className="px-2 py-8 xl:w-[67%] bg-color1/10">
          <GlassCard>
            <section className="py-4 text-justify fontpop-4">
              <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  About Us
                </h2>
                <p className="text-lg text-gray-100 mb-8">
                  At QuickStaff, we specialize in connecting skilled event staff
                  with businesses and individuals seeking top-tier talent for
                  their events. Whether you're organizing a corporate gathering,
                  a promotional event, a wedding, or any other special occasion,
                  we've got you covered.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-gray-100">
                      Our mission at QuickStaff is simple: to streamline the
                      process of hiring event staff and finding rewarding
                      opportunities for talented individuals within the event
                      industry. We strive to match the right people with the
                      right positions, ensuring seamless and successful events
                      for our clients while providing fulfilling employment
                      opportunities for event professionals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      What Sets Us Apart
                    </h3>
                    <p className="text-gray-100">
                      At QuickStaff, we understand that exceptional events
                      require exceptional staff. That's why we meticulously vet
                      each candidate in our talent pool, ensuring they possess
                      the skills, experience, and professionalism necessary to
                      exceed expectations. Our commitment to quality and
                      personalized service sets us apart in the industry, making
                      us the go-to choice for both event organizers and event
                      staff alike.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                  <ul className="list-disc list-inside text-gray-100">
                    <li>
                      Event Staffing: Whether you need experienced bartenders,
                      knowledgeable event coordinators, charismatic brand
                      ambassadors, or any other event staff, we've got you
                      covered. Our extensive network of skilled professionals
                      ensures that your event runs smoothly from start to
                      finish.
                    </li>
                    <li>
                      Job Placement: For event professionals seeking employment
                      opportunities, QuickStaff provides a platform to showcase
                      your talents and connect with leading businesses and
                      individuals in need of your expertise. From temporary gigs
                      to long-term placements, we're dedicated to helping you
                      find your perfect match.
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                  <ul className="list-disc list-inside text-gray-100">
                    <li>
                      Reliability: With QuickStaff, you can trust that your
                      staffing needs will be met with reliability and
                      efficiency. We prioritize clear communication, timely
                      responses, and unparalleled customer service to ensure
                      your satisfaction every step of the way.
                    </li>
                    <li>
                      Flexibility: Whether you're planning a small gathering or
                      a large-scale event, we offer flexible staffing solutions
                      tailored to your specific requirements. No event is too
                      big or too small for our team to handle.
                    </li>
                    <li>
                      Expertise: With years of experience in the event staffing
                      industry, our team possesses the knowledge and expertise
                      needed to deliver exceptional results. We stay up-to-date
                      with the latest trends and best practices to ensure that
                      we're always one step ahead.
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-gray-100">
                    Ready to take your event to the next level? Looking for
                    exciting opportunities in the event industry?{" "}
                    <Link href={"/contact"}>
                      <span className="text-bubblegum fontpop-3">Contact </span>
                    </Link>
                    QuickStaff today to learn more about our services or to join
                    our growing network of event professionals. Let us help you
                    make your next event a resounding success!
                  </p>
                </div>
              </div>
            </section>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
