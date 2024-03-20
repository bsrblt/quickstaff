// "use client";
// import React, { useEffect } from "react";

// const MenuButton = () => {
//   useEffect(() => {
//     const loadScripts = async () => {
//       const popoverScript = document.createElement("script");
//       popoverScript.type = "module";
//       popoverScript.src =
//         "https://unpkg.com/@material-tailwind/html@latest/scripts/popover.js";
//       document.body.appendChild(popoverScript);

//       const rippleScript = document.createElement("script");
//       rippleScript.src =
//         "https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js";
//       document.body.appendChild(rippleScript);

//       const styleLink = document.createElement("link");
//       styleLink.rel = "stylesheet";
//       styleLink.href =
//         "https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css";
//       document.head.appendChild(styleLink);
//     };

//     loadScripts();
//   }, []);
//   return (
//     <>
//       <button
//         data-ripple-light="true"
//         data-popover-target="menu"
//         className="middle none center mr-3 min-w-[180px] rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//       >
//         Choose staff
//       </button>
//       <ul
//         role="menu"
//         data-popover="menu"
//         data-popover-placement="bottom"
//         className="absolute z-10 min-w-[180px]  overflow-hidden rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
//       >
//         <li
//           role="menuitem"
//           className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
//         >
//           Chef
//         </li>
//         <li
//           role="menuitem"
//           className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
//         >
//           Waiter
//         </li>
//         <li
//           role="menuitem"
//           className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
//         >
//           Bartender
//         </li>
//         <li
//           role="menuitem"
//           className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
//         >
//           Cleaner
//         </li>
//       </ul>

//       <link
//         rel="stylesheet"
//         href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
//       />

//       <script
//         type="module"
//         src="https://unpkg.com/@material-tailwind/html@latest/scripts/popover.js"
//         defer
//       ></script>

//       <script
//         src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"
//         defer
//       ></script>
//     </>
//   );
// };

// export default MenuButton;
