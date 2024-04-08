import React from "react";
import Link from "next/link";
import GlassCard from "@/components/layout/GlassCard";

interface NewsItemProps {
  title: string;
  backgroundImage: string;
  summary: string;
  id: number;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  summary,
  backgroundImage,
  id,
}) => {
  const news = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className="sticky top-0 h-screen flex flex-col bg-cover bg-center items-center justify-center backdrop-blur-lg rounded-t-[6rem] border-t-8 border-l-2 border-r-2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Link
        href={`/news/${news}?bg=${encodeURIComponent(
          backgroundImage
        )}&title=${encodeURIComponent(title)}&id=${encodeURIComponent(id)}`}
        passHref
      >
        <div className="mx-auto md:w-[69%] bg-white/40 hover:bg-white/80 shadow-md transition-all duration-300 rounded-xl -mt-20">
          <GlassCard>
            <h2 className="md:text-[1.7rem] sm:text-2xl text-xl p-5 text-black fontpop-1 antialiased">
              {title}
            </h2>
            <p className="text-black sm:text-md text-sm pb-5 px-5 fontpop-1">
              {summary}{" "}
              <span className="text-color1 font-normal fontpop-1">
                {" "}
                -&gt; Read More
              </span>
            </p>
          </GlassCard>
        </div>
      </Link>
    </div>
  );
};

export default NewsItem;
