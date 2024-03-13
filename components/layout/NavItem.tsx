import React from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: any) => void;
}
const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => (
  <span className="items-center justify-start flex" onClick={onClick}>
    <Link href={href} passHref>
      <div className="rounded-lg px-4 ml-3 py-[6px] text-sm font-medium text-gray-200 group flex cursor-pointer transition-all duration-200 hover:bg-color2/90">
        {children}
      </div>
    </Link>
  </span>
);

export default NavItem;
