import React from "react";
import MainTitle from "@/components/layout/MainTitle";
import GlassCard from "@/components/layout/GlassCard";
import Link from "next/link";

const NewsPage: React.FC = () => {
  const maintitle = (
    <div className="flex h-[10%] sm:my-[1rem] my-1 mx-2 justify-end items-end  ">
      <MainTitle
        textBig={
          <h1 className="text-white lg:text-[6rem] xl:text-[rem] md:text-7xl sm:text-6xl text-5xl font-bold drop-shadow-xl fontpop-4 backdrop-blur-[6px]">
            Latest <span className="text-color2 fontpop-1">News</span>
          </h1>
        }
        textSmall={
          <h1 className="text-white lg:text-[2.5rem] md:text-3xl text-xl font-bold  backdrop-blur-[1px] drop-shadow-xl mt-4 md:pb-[1.7rem] pb-[1.3rem] antialiased fontpop-2 tracking-tight pl-1 fontpop-4">
            Get updated with the latest happenings.
          </h1>
        }
      />
    </div>
  );

  const newsData = [
    {
      title: "QuickStaff Announces Expansion to New Markets",
      content:
        "QuickStaff is excited to announce its expansion to new markets, providing event staffing solutions to even more businesses and individuals nationwide. With this expansion, QuickStaff aims to further solidify its position as a leader in the event staffing industry.",
    },
    {
      title: "QuickStaff Named Top Event Staffing Agency of the Year",
      content:
        "QuickStaff is proud to be recognized as the Top Event Staffing Agency of the Year by EventPro Magazine. This prestigious award highlights QuickStaff's commitment to excellence in providing exceptional event staffing services to clients across various industries.",
    },
    {
      title: "QuickStaff Launches Innovative Training Program for Event Staff",
      content:
        "QuickStaff is excited to announce the launch of its innovative training program designed to enhance the skills and professionalism of event staff. This comprehensive program covers various aspects of event management, customer service, and industry best practices, ensuring that QuickStaff's event staff are equipped to deliver exceptional experiences for clients and attendees.",
    },
  ];

  return (
    <main
      id="parallaxBackground"
      className="flex flex-col h-full items-center justify-center"
    >
      <section
        className="flex flex-col w-full min-h-screen bg-cover bg-fixed bg-center justify-start items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/news.jpg)",
        }}
      >
        {maintitle}
        <div className="px-2 py-8 xl:w-[67%]">
          <GlassCard>
            <section className="py-6 text-justify fontpop-4 bg-color1/10">
              <div className="container mx-auto px-4">
                <p className="text-lg text-gray-300 mb-8">
                  Stay tuned for the latest updates, announcements, and news
                  from QuickStaff and the event industry.
                </p>

                {newsData.map((newsItem, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      {newsItem.title}
                    </h3>
                    <p className="text-gray-100">{newsItem.content}</p>
                    <Link
                      href={`/news/${newsItem.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-bubblegum fontpop-3 mt-2 block cursor-pointer"
                    >
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
