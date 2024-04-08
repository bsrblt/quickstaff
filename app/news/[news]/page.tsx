"use client";
import React from "react";
import Link from "next/link";
import GlassCard from "@/components/layout/GlassCard";
import { useSearchParams, useRouter } from "next/navigation";
import newsData from "@/components/utils/newsData";
import Button from "@/components/layout/Button";
import ErrorPage from "@/app/not-found";

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
      <section
        className="sticky top-0 min-h-screen flex flex-col bg-cover bg-fixed items-center justify-center text-black backdrop-blur-lg rounded-t-[6rem] border-t-4  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY: "50%",
        }}
      >
        <div className="grid sm:w-[69%] w-11/12 justify-center gap-8 space-x-8 p-2 mt-14 fadeIn035">
          <GlassCard>
            <div className="grid gap-8 bg-gray-200/60 rounded-xl">
              <h1 className="sm:text-3xl text-md backdrop-blur-sm p-2 fontpop-1 antialiased">
                {title}
              </h1>
              <p
                id="blog-content"
                className="backdrop-blur-sm md:text-xl text-justify sm:text-lg text-sm leading-tight sm:p-3 p-2 fontpop-1 antialiased"
              >
                {content}
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-[16rem]">
                <Button
                  type="button"
                  text="previous article"
                  onClick={prevArticleHandler}
                ></Button>
              </div>
              <Link href="/news" className="w-[16rem]">
                <Button type="button" text="back to news"></Button>
              </Link>
              <div className="w-[16rem]">
                <Button
                  type="button"
                  text="next article"
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