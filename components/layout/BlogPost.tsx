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
      className="sticky top-0 h-screen flex flex-col bg-cover bg-center items-center justify-center rounded-t-[6rem] border-t-4  "
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
        <div className="hover:bg-white/40 shadow-md transition-all duration-300 rounded-xl mx-3">
          <GlassCard>
            <h2 className="md:text-3xl sm:text-2xl text-xl p-7 text-black fontpop-1 antialiased">
              {title}
            </h2>
          </GlassCard>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
