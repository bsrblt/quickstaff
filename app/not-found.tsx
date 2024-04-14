import React from "react";
import MainTitle from "@/components/layout/MainTitle";
import GlassCard from "@/components/layout/GlassCard";
import Button from "@/components/layout/Button";
import Link from "next/link";
import ParallaxBackground from "@/components/layout/ParallaxBackground";

const ErrorPage: React.FC = () => {
  const maintitle = (
    <div className="flex h-[10%] sm:my-[1rem] my-1 -ml-[1.8rem] sm:ml-0 px-10 justify-end items-end">
      <MainTitle
        textBig={
          <h1 className="text-bubblegum lg:text-[6rem] xl:text-[rem] md:text-7xl sm:text-6xl text-5xl font-bold drop-shadow-xl fontpop-4">
            Oops!
          </h1>
        }
        textSmall={
          <h1 className="text-gray-100 lg:text-[2.5rem] md:text-3xl text-xl font-bold drop-shadow-xl mt-4 md:pb-[1.7rem] pb-[1.3rem] antialiased fontpop-2 tracking-tight pl-1 fontpop-4">
            This wasn't supposed to happen.
          </h1>
        }
      />
    </div>
  );

  return (
    <main className="flex flex-col h-full items-center justify-center">
      <section
        className="flex flex-col w-full min-h-screen justify-start items-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))",
        }}
      >
        <ParallaxBackground imgSource="/error.jpg" />
        {maintitle}
        <div
          id="error404"
          className="px-2 py-8 xl:max-w-[67%] items-center justify-center text-center absolute bottom-0 mb-8"
        >
          <GlassCard>
            <section className="py-6 text-center fontpop-4 bg-color1/10">
              <div className="container mx-auto px-4">
                <h2 className="sm:text-3xl text-xl font-bold mb-4 text-white">
                  Error 404
                </h2>
                <p className="sm:text-lg text-md text-gray-300">
                  The page you are looking for might have been removed or
                  doesn't exist.
                </p>
              </div>
            </section>
            <Link href="/">
              <Button type="button">Take me home</Button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
