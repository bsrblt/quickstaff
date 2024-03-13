import BlogPost from "@/components/layout/BlogPost";
import ScrollArrows from "@/components/layout/ScrollArrows";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 0,
      title:
        "The Essential Traits of Event Staff: What to Look for in Your Hiring Process",
      backgroundImage: "/phh1.jpg",
    },
    {
      id: 1,
      title:
        "The Role of Event Staff in Creating Memorable Attendee Experiences",
      backgroundImage: "/champagne2.jpg",
    },
    {
      id: 2,
      title: "The Green Event Staff: Sustainability in the Industry",
      backgroundImage: "/dd.jpg",
    },
    {
      id: 3,
      title:
        "Ensuring Diversity and Inclusion in Your Event Staff: Why It Matters",
      backgroundImage: "/evntmngr.jpg",
    },
    {
      id: 4,
      title: "Event Staff Appreciation: Recognizing and Retaining Top Talent",
      backgroundImage: "/serve.jpg",
    },
    {
      id: 5,
      title: "Building a Strong Event Team: Teamwork Makes the Dream Work",
      backgroundImage: "/wtrs.jpg",
    },
    {
      id: 6,
      title: "The Role of Social Media in Event Staff Recruitment",
      backgroundImage: "/bar1.jpg",
    },
    {
      id: 7,
      title:
        "Event Staffing in a Post-Pandemic World: Lessons Learned and Future Outlook",
      backgroundImage: "/event.jpg",
    },
    {
      id: 8,
      title:
        "Effective Communication Strategies for Event Staff: Enhancing Team Dynamics",
      backgroundImage: "/btts.png",
    },
  ];

  return (
    <section
      className="flex flex-col h-full bg-cover bg-fixed bg-center justify-start  fadeIn005"
      style={{
        backgroundImage: "url(/chef1.jpg)",
      }}
    >
      <div className="relative">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            backgroundImage={post.backgroundImage}
          />
        ))}
      </div>
      <ScrollArrows />
    </section>
  );
};

export default BlogPage;
