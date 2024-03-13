// import React, { useEffect } from "react";
// import { useStateFromLocalStorage } from "../hooks/useStateFromLocalStorage";

// const AuthInitializer = ({ setIsLoggedIn, setNameInput, setDark }) => {
//   useEffect(() => {
//     const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
//     if (storedIsLoggedIn === "true") {
//       setIsLoggedIn(true);
//       const storedUsername = localStorage.getItem("username");
//       setNameInput(storedUsername ?? "");
//       const darkPref = localStorage.getItem("isDark");
//       if (darkPref === "true") {
//         setDark(true);
//       } else {
//         setDark(false);
//       }
//     }
//   }, [setIsLoggedIn, setNameInput, setDark]);

//   return null;
// };
// export default AuthInitializer;
