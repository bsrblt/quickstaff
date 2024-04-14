import React from "react";
import GlassCard from "./GlassCard";
import FaqItem from "./FaqItem";
import MainTitle from "./MainTitle";
import Link from "next/link";
import Image from "next/image";
import dash from "../../public/dash.svg";

const faqs = [
  {
    id: 1,
    question: "How can I sign up as an Event Service Provider?",
    answer:
      "To sign up as an Event Service Provider, click on the 'Register' button on the homepage, fill in the required information, and create your profile. Once registered, you can start listing your services and skills.",
  },
  {
    id: 2,
    question: "What types of event services can I offer on this platform?",
    answer:
      "You can offer a wide range of event services, including but not limited to chefs, bartenders, waiters, performers, technicians, chauffeurs, event managers, and cleaners. Our platform is designed to accommodate various roles to meet the diverse needs of event organizers.",
  },
  {
    id: 3,
    question: "How can Event Service Customers hire staff for their events?",
    answer:
      "Event Service Customers can browse through the profiles of available service providers, review their skills and experience, and directly contact them through the platform. Once you find the right fit, you can discuss details and finalize the hiring process with the chosen service provider.",
  },
  {
    id: 4,
    question: "Is there a verification process for Event Service Providers?",
    answer:
      "Yes, we prioritize the safety and reliability of our platform. We conduct a thorough verification process for all Event Service Providers to ensure that they meet the necessary qualifications and have the required experience for their respective roles.",
  },
  {
    id: 5,
    question: "How does the payment process work?",
    answer:
      "Payment processes may vary depending on the agreement between the Event Service Provider and the Customer. The platform does not handle direct payments. Service providers and customers are encouraged to discuss and agree upon payment terms independently.",
  },
  {
    id: 6,
    question: "Can I review and rate Event Service Providers or Customers?",
    answer:
      "Yes, both Event Service Providers and Customers can review and rate each other after completing an event. This helps build a trustworthy community and provides valuable feedback for future collaborations.",
  },
  {
    id: 7,
    question: "What should I do if I encounter issues during an event?",
    answer:
      "If you encounter any issues during an event, please contact our support team immediately through the 'Help' section on your dashboard. We are here to assist you and ensure a smooth experience on our platform.",
  },
  {
    id: 8,
    question:
      "How can I cancel a booking as an Event Service Provider or Customer?",
    answer:
      "To cancel a booking, please communicate with the other party as early as possible. Both parties should agree on the cancellation, and any applicable cancellation policies outlined in your agreement should be followed. If there are disputes, contact our support team for assistance.",
  },
];

const Faq = () => {
  return (
    <main className="flex h-full flex-col">
      <section
        className="flex flex-col min-w-screen h-auto bg-cover bg-fixed bg-center justify-center items-center fadeIn005 overflow-hidden mdbgof"
        style={{
          backgroundImage: "url(/jj.jpg)",
        }}
      >
        <div className="relative w-[90%] sm:w-[100%] md:w-[92%] lg:w-[92%] xl:w-[69%] lg:mb-2 min-h-full bottom-6">
          <div className="sm:-mt-10 sm:-mb-20 md:m-0 sm:px-3 -mx-3">
            <MainTitle
              textBig={
                <h1 className="text-white lg:text-[6rem] xl:text-[rem] md:text-7xl text-6xl font-bold my-3 py-3 pt-[1rem] px-6 fontpop-2 antialiased">
                  rest
                  <span className="text-bubblegum drop-shadow-xl fontpop-2 antialiased">
                    {" "}
                    assured.
                  </span>
                </h1>
              }
              textSmall={
                <h1
                  id="choice"
                  className="text-white lg:text-[2.5rem] md:text-3xl text-xl font-bold m-1 mb-1 md:pb-[4rem] pb-[2.3rem] px-6 fontpop-2 antialiased"
                >
                  we've got the answers.
                </h1>
              }
            />
          </div>
          <div className="mx-3">
            <GlassCard>
              <div className="px-6  text-white bg-color1/10">
                <div className="grid divide-y  mx-auto mt-8">
                  {faqs.map((faq) => (
                    <FaqItem
                      key={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
                <div className="my-3">
                  <div className="flex items-center justify-center">
                    <Image
                      src={dash}
                      alt="dash"
                      width={50}
                      height={100}
                      className="-mt-8 -mb-2"
                    />
                  </div>
                  <Link
                    href="/contact"
                    className="flex flex-col w-full h-16 items-center justify-center text-lg text-center fontpop-2 pb-1"
                  >
                    <div className="w-[100%]">
                      <h1 className=" block sm:text-xl text-[0.95rem] font-bold text-center drop-shadow-lg text-gray-200 mt-3 fontpop-3 leading-relaxed">
                        Not listed here?{" "}
                        <span className="text-color1/100 fontpop-5">
                          Contact us
                        </span>{" "}
                        and we'll return as soon as possible.
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
