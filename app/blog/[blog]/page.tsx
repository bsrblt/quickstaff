"use client";
import Button from "@/components/layout/Button";
import GlassCard from "@/components/layout/GlassCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BlogPostPage: React.FC = () => {
  const searchParams = useSearchParams();
  const backgroundImage = searchParams.get("bg") || "";
  const title = searchParams.get("title") || "";

  return (
    <div className="h-full">
      <section
        className="sticky top-0 min-h-screen flex flex-col bg-cover items-center justify-center text-black backdrop-blur-lg rounded-t-[6rem] border-t-4  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="grid sm:w-[69%] w-11/12 backdrop-blur-md justify-center gap-8 space-x-8 p-2 mt-14">
          <GlassCard>
            <div className="grid gap-8 ">
              <div className="sm:text-3xl text-md backdrop-blur-sm p-2 fontpop-1 antialiased">
                {title}
              </div>
              <p
                id="blog-content"
                className=" backdrop-blur-sm md:text-xl text-justify sm:text-lg text-sm  leading-tight sm:p-3 p-2 fontpop-1 antialiased"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis repellat molestias perspiciatis maiores enim ex, a
                eveniet. Et at, maxime doloribus sunt labore iste iure officiis
                porro dicta autem amet? Aliquid optio vitae eligendi vel, amet
                deserunt perfer consequuntur eum fugit beatae numquam porro sint
                perferendis possimus quo at doloremque, cumque perspiciatis
                incidunt ullam, odit dolorem praesentium aspernatur! Cupiditate
                architecto hic quidem velit. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Perferendis repellat molestias
                perspiciatis maiores enim ex, a eveniet. Et at, maxime doloribus
                sunt labore iste iure officiis porro dicta autem amet? Aliquid
                optio vitae eligendi vel, amet deserunt perferendisdi laudantium
                libero. Illum voluptatibus omnis quae officiis consequuntur eum
                fugit beatae numquam porro sint perferendis possimus quo at
                doloremque, cumque perspiciatis incidunt ullam, odit dolorem
                praesentium aspernatur! Cupiditate architecto hic quidem velit.
              </p>
            </div>
            <Link href="/blog">
              <Button type="button" text="back"></Button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
