"use client";
import React from "react";
import Link from "next/link";
import GlassCard from "@/components/layout/GlassCard";
import { useSearchParams, useRouter } from "next/navigation";
import newsData from "@/components/utils/newsData";
import Button from "@/components/layout/Button";
import ErrorPage from "@/app/not-found";
import ParallaxBackground from "@/components/layout/ParallaxBackground";

const NewsPostPage: React.FC = () => {
  const searchParams = useSearchParams();
  const backgroundImage = searchParams.get("bg") || "";
  const title = searchParams.get("title") || "";
  const id = parseInt(searchParams.get("id") || "", 10);
  const newsItem = newsData.find((news) => news.id === id);
  const router = useRouter();

  if (!newsItem) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  const { content } = newsItem;

  const nextArticleHandler = () => {
    const nextId = id + 1;
    const nextNewsItem = newsData.find((news) => news.id === nextId);
    if (nextNewsItem) {
      router.push(
        `/news/${encodeURIComponent(
          nextNewsItem.title
        )}?bg=${encodeURIComponent(
          nextNewsItem.backgroundImage
        )}&title=${encodeURIComponent(
          nextNewsItem.title
        )}&id=${encodeURIComponent(nextNewsItem.id)}`
      );
    }
  };
  const prevArticleHandler = () => {
    const prevId = id - 1;
    const prevNewsItem = newsData.find((news) => news.id === prevId);
    if (prevNewsItem) {
      router.push(
        `/news/${encodeURIComponent(
          prevNewsItem.title
        )}?bg=${encodeURIComponent(
          prevNewsItem.backgroundImage
        )}&title=${encodeURIComponent(
          prevNewsItem.title
        )}&id=${encodeURIComponent(prevNewsItem.id)}`
      );
    }
  };

  return (
    <div className="h-full ">
      <section className="sticky top-0 min-h-screen flex flex-col bg-cover bg-fixed items-center justify-center text-black rounded-t-[6rem] border-t-4  ">
        <ParallaxBackground imgSource={`${backgroundImage}`} />
        <div className="grid xl:max-w-[69%] m-2 justify-center gap-8 space-x-8 p-2 mt-14 fadeIn035">
          <GlassCard>
            <div className="grid gap-8 bg-gray-200/70 rounded-xl">
              <h1 className="sm:text-3xl text-md p-2 bg-white/40 fontpop-1 antialiased">
                {title}
              </h1>
              <p
                id="blog-content"
                className="md:text-xl text-justify sm:text-lg text-sm  bg-white/40  leading-tight sm:p-3 p-2 fontpop-1 antialiased"
              >
                {content}
              </p>
            </div>
            <div className="sm:flex grid justify-center gap-2 w-[100%] mb-2">
              <div className="md:w-[15rem] sm:[8rem]">
                <Button
                  type="button"
                  text="<< previous article"
                  onClick={prevArticleHandler}
                ></Button>
              </div>
              <Link href="/news" className="md:w-[15rem] sm:[8rem]">
                <Button type="button" text="back to news"></Button>
              </Link>
              <div className="md:w-[15rem] sm:[8rem] ">
                <Button
                  type="button"
                  text="next article >>"
                  onClick={nextArticleHandler}
                ></Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default NewsPostPage;
