/* import React from "react";
import Link from "next/link";
import GlassCard from "@/components/layout/GlassCard";
import Button from "@/components/layout/Button";

export async function generateStaticParams() {
  return [{ news: "BIRINCI-HABER" }, { news: "IKINCI HABER" }];
}

async function getNewsArticle(params) {
  const newsContent = params.news + " Lorem ipsum dolor";

  return newsContent;
}

export default async function NewsPostPage({ params }) {
  const exampleServerRetreivedData = getNewsArticle(params);


  return (
    <div className="h-full ">
      <section
        className="sticky top-0 min-h-screen flex flex-col bg-cover bg-fixed items-center justify-center text-black backdrop-blur-lg rounded-t-[6rem] border-t-4  "

      >
        <div className="grid sm:w-[69%] w-11/12 justify-center gap-8 space-x-8 p-2 mt-14 fadeIn035">
          <GlassCard>
            <div className="grid gap-8 bg-gray-200/60 rounded-xl">
              <h1 className="sm:text-3xl text-md backdrop-blur-sm p-2 fontpop-1 antialiased">
              </h1>
              <p
                id="blog-content"
                className="backdrop-blur-sm md:text-xl text-justify sm:text-lg text-sm leading-tight sm:p-3 p-2 fontpop-1 antialiased"
              >
                {JSON.stringify(params)}
                {exampleServerRetreivedData}
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-[16rem]">
                <Button
                  type="button"
                  text="previous article"
                ></Button>
              </div>
              <Link href="/news" className="w-[16rem]">
                <Button type="button" text="back to news"></Button>
              </Link>
              <div className="w-[16rem]">
                <Button
                  type="button"
                  text="next article"
                ></Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
 */
