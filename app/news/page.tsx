import React from "react";
import MainTitle from "@/components/layout/MainTitle";
import ScrollArrows from "@/components/layout/ScrollArrows";
import NewsItem from "@/components/layout/NewsItem";
import newsData from "@/components/utils/newsData";
import ParallaxBackground from "@/components/layout/ParallaxBackground";

const NewsPage: React.FC = () => {
  const maintitle = (
    <div className="flex sm:my-[1rem] mx-3 justify-center items-center -mt-[1rem] sm:mb-3 mb-16 ">
      <MainTitle
        textBig={
          <h1 className="text-silver lg:text-[6rem] xl:text-[rem] md:text-7xl sm:text-6xl text-5xl font-bold drop-shadow-xl fontpop-4 sm:mt-6 sm:mb-20">
            Latest <span className="text-color2 fontpop-1">News</span>
          </h1>
        }
        textSmall={""}
      />
    </div>
  );

  return (
    <section
      className="flex flex-col w-full min-h-screen bg-cover bg-fixed bg-center justify-start items-center mt-2"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))",
      }}
    >
      <ParallaxBackground imgSource="/news.jpg" />
      <section className=" flex flex-col h-full bg-cover bg-fixed bg-center justify-start ">
        <div className=" md:w-[79%] mx-auto fadeIn005">
          {maintitle}
          {newsData.map((news) => (
            <NewsItem
              key={news.id}
              id={news.id}
              title={news.title}
              summary={news.summary}
              backgroundImage={news.backgroundImage}
            />
          ))}
        </div>
        <ScrollArrows />
      </section>
    </section>
  );
};

export default NewsPage;
