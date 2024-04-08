import React from "react";
import Link from "next/link";

const Footer = () => {
  const sections = [
    {
      title: "Navigation",
      links: [
        { text: "Home", url: "/" },
        { text: "Staff", url: "/#staffselect" },
        { text: "News", url: "/news" },
        { text: "Blog", url: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Use", url: "/terms-of-use" },
        { text: "Terms of Business", url: "/terms-of-business" },
        { text: "Cookies", url: "/cookies" },
        { text: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/about-us" },
        { text: "Careers", url: "/careers" },
        { text: "FAQ", url: "/faq" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Community",
      links: [
        { text: "Linkedin", url: "https://linkedin.com" },
        { text: "Facebook", url: "https://facebook.com" },
        { text: "X", url: "https://x.com" },
        { text: "YouTube", url: "https://youtube.com" },
      ],
    },
  ];

  const listedSections = (
    <div className="sm:flex grid grid-cols-2 w-[69%] sm:w-[90%] xl:w-[68%] sm:justify-between justify-around lg:mx-[3rem] my-1">
      {sections.map((section, index) => (
        <div key={index} className="md:p-5 sm:p-1 -mt-3 sm:mt-0 mb-3 sm:mb-0">
          <div className="sm:text-xs text-[0.7rem] sm:mx-3 px-1 uppercase text-gray-400 font-medium mt-6 mb-3">
            {section.title}
          </div>
          {section.links.map((link, linkIndex) => (
            <Link
              key={linkIndex}
              href={link.url}
              className="sm:my-3 my-[0.35rem] block sm:mx-3 px-1 py-1 text-gray-300 hover:text-gray-100 sm:text-sm text-[0.85rem] mb-1 font-medium duration-700"
              passHref
            >
              {link.text}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );

  const copyright = (
    <div className="block w-[79%] sm:w-[88%]  xl:w-[65%] py-5 sm:mt-0 border-t border-gray-500 text-gray-400 sm:text-sm text-[0.7rem] ">
      <div className="flex flex-wrap mt-1 gap-1">
        <p>copyright © QuickStaff 2024. </p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );

  return (
    <footer
      id="footer"
      className="flex flex-col flex-wrap items-center w-screen bg-gradient-to-b from-color1/90 to-color2/90 pt-5 text-left"
    >
      {listedSections}
      {copyright}
    </footer>
  );
};

export default Footer;
