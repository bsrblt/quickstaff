import React from "react";
import Link from "next/link";
import GlassCard from "@/components/layout/GlassCard";

interface BlogPostProps {
  title: string;
  backgroundImage: string;
  id: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, backgroundImage }) => {
  const blog = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className="sticky top-0 h-screen flex flex-col bg-cover bg-center items-center justify-center  backdrop-blur-lg rounded-t-[6rem] border-t-4  "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Link
        href={`/blog/${blog}?bg=${encodeURIComponent(
          backgroundImage
        )}&title=${encodeURIComponent(title)}`}
        passHref
      >
        <div className="hover:bg-white/40 shadow-md transition-all duration-300 rounded-xl">
          <GlassCard>
            <h2 className="md:text-4xl sm:text-3xl text-2xl p-7 text-black fontpop-1 antialiased">
              {title}
            </h2>
          </GlassCard>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
