"use client";
import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isNewMember: boolean;
  isLoggedInPro: boolean;
  isLoggedInEmp: boolean;
  firstNameInput: string;
  lastNameInput: string;
  messageInput: string;
  pwInput: string;
  mailInput: string;
  phoneNumberInput: string;
  regularInput: string;
  firstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pwChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  messageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  regularInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearInputs: () => void;
  validSignupAuth: boolean;
  validLoginAuth: boolean;
  proLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  logout: (e: React.MouseEvent) => Promise<void>;
  empLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  proSignup: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  empSignup: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  firstNameValid: boolean;
  lastNameValid: boolean;
  pwValid: boolean;
  mailValid: boolean;
  phoneNumberValid: boolean;
  firstNameTouched: boolean;
  lastNameTouched: boolean;
  mailTouched: boolean;
  pwTouched: boolean;
  phoneNumberTouched: boolean;
  forgotPwHandler: (e: React.FormEvent<HTMLSpanElement>) => Promise<void>;
  forgotPw: boolean;
  dark: boolean;
  themeToggler: () => void;
  newUserHandler: () => void;
  existingUserHandler: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const router = useRouter();
  const [isNewMember, setIsNewMember] = useState(true);
  const [isLoggedInPro, setIsLoggedInPro] = useState(false);
  const [isLoggedInEmp, setIsLoggedInEmp] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [mailInput, setMailInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [mailValid, setMailValid] = useState(true);
  const [pwValid, setPwValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [pwTouched, setPwTouched] = useState(false);
  const [mailTouched, setMailTouched] = useState(false);
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false);
  const [forgotPw, setForgotPw] = useState(false);
  const [regularInput, setRegularInput] = useState("");
  const [regularInputTouched, setRegularInputTouched] = useState(false);
  const [regularInputValid, setRegularInputValid] = useState(false);
  const [dark, setDark] = useState(false);

  const firstNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entry = e.target.value;
    console.log(entry);
    if (entry.trim().length > 0) {
      setFirstNameTouched(true);
      console.log(entry);
    }
    setFirstNameInput(entry);

    if (entry.trim().length > 2) {
      setFirstNameValid(true);
      console.log("First Name Valid:", true);
    } else {
      setFirstNameValid(false);
      console.log("First Name Valid:", false);
    }
  };
  const lastNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entry = e.target.value;
    if (entry.trim().length > 0) {
      setLastNameTouched(true);
    }
    setLastNameInput(entry);

    if (entry.trim().length > 2) {
      setLastNameValid(true);
    } else {
      setLastNameValid(false);
    }
  };
  const pwChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entry = e.target.value;
    if (entry.trim().length > 0) {
      setPwTouched(true);
    }
    setPwInput(entry);

    if (entry.trim().length > 2) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entry = e.target.value;
    console.log(entry);
    if (entry.trim().length > 0) {
      setMailTouched(true);
    }
    setMailInput(entry);

    if (entry.trim().length > 2 && entry.trim().includes("@")) {
      setMailValid(true);
    } else {
      setMailValid(false);
    }
  };
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entry = e.target.value;
    console.log(entry);
    if (entry.trim().length > 0) {
      setPhoneNumberTouched(true);
    }
    setPhoneNumberInput(entry);

    if (typeof entry === "string" && entry.trim().length > 2) {
      setPhoneNumberValid(true);
    } else {
      setPhoneNumberValid(false);
    }
  };
  const messageChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const entry = e.target.value;
    setMessageInput(entry);
  };
  const regularInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const entry = e.target.value;
    if (entry.trim().length > 0) {
      setRegularInputTouched(true);
    }
    setRegularInput(entry);

    if (entry.trim().length > 2) {
      setRegularInputValid(true);
    } else {
      setRegularInputValid(false);
    }
  };
  const forgotPwHandler = async (e: React.FormEvent<HTMLSpanElement>) => {
    setForgotPw(true);
  };

  const themeToggler = () => {
    setDark((prevDark) => {
      const newDark = !prevDark;
      localStorage.setItem("isDark", newDark ? "true" : "false");
      return newDark;
    });
  };
  const newUserHandler = () => {
    setForgotPw(false);
    setIsNewMember(true);
  };
  const existingUserHandler = () => {
    setForgotPw(false);
    setIsNewMember(false);
  };

  const validLoginAuth = mailTouched && mailValid && pwTouched && pwValid;
  const validSignupAuth =
    firstNameTouched &&
    lastNameTouched &&
    firstNameValid &&
    lastNameValid &&
    validLoginAuth;

  const clearInputs = () => {
    setMailInput("");
    setFirstNameInput("");
    setLastNameInput("");
    setPwInput("");
  };

  const employerLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validLoginAuth) {
      setIsLoggedInEmp(true);
      localStorage.setItem("isLoggedInEmp", "true");
      localStorage.setItem("firstname", firstNameInput);
      localStorage.setItem("lastname", lastNameInput);
      clearInputs();
    }
  };
  const employerSignupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validSignupAuth) {
      setIsLoggedInEmp(true);
      localStorage.setItem("isLoggedInEmp", "true");
      localStorage.setItem("firstname", firstNameInput);
      localStorage.setItem("lastname", lastNameInput);
    }
  };
  const proLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validLoginAuth) {
      setIsLoggedInPro(true);
      localStorage.setItem("isLoggedInPro", "true");
      localStorage.setItem("firstname", firstNameInput);
      localStorage.setItem("lastname", lastNameInput);
      clearInputs();
    }
  };
  const proSignupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validSignupAuth) {
      setIsLoggedInPro(true);
      localStorage.setItem("isLoggedInPro", "true");
      localStorage.setItem("firstname", firstNameInput);
      localStorage.setItem("lastname", lastNameInput);
    }
  };
  const logoutHandler = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      console.log("Logout initiated");
      const removeKeys = () => {
        localStorage.removeItem("isLoggedInPro");
        localStorage.removeItem("isLoggedInEmp");
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
      };
      removeKeys();
      setIsLoggedInPro(false);
      setIsLoggedInEmp(false);
      setFirstNameTouched(false);
      setLastNameTouched(false);
      setPwTouched(false);
      setMailTouched(false);
      clearInputs();

      router.push("/");
    } catch (error) {
      console.log("Error in logout", error);
    }
    console.log("Logout done");
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedIsLoggedInPro = localStorage.getItem("isLoggedInPro");
      const storedIsLoggedInEmp = localStorage.getItem("isLoggedInEmp");
      if (storedIsLoggedInPro === "true") {
        setIsLoggedInPro(true);
        const storedFirstname = localStorage.getItem("firstname");
        setFirstNameInput(storedFirstname ?? "");
        const storedLastname = localStorage.getItem("lastname");
        setLastNameInput(storedLastname ?? "");
        const darkPref = localStorage.getItem("isDark");
        if (darkPref === "true") {
          setDark(true);
        } else {
          setDark(false);
        }
      } else if (
        storedIsLoggedInPro === "false" ||
        storedIsLoggedInPro === null ||
        storedIsLoggedInPro === undefined
      ) {
        setIsLoggedInPro(false);
      }
      if (storedIsLoggedInEmp === "true") {
        setIsLoggedInEmp(true);
        const storedFirstname = localStorage.getItem("firstname");
        setFirstNameInput(storedFirstname ?? "");
        const storedLastname = localStorage.getItem("lastname");
        setLastNameInput(storedLastname ?? "");
        const darkPref = localStorage.getItem("isDark");
        if (darkPref === "true") {
          setDark(true);
        } else {
          setDark(false);
        }
      } else if (
        storedIsLoggedInEmp === "false" ||
        storedIsLoggedInEmp === null ||
        storedIsLoggedInEmp === undefined
      ) {
        setIsLoggedInEmp(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isNewMember,
        isLoggedInPro,
        isLoggedInEmp,
        firstNameInput,
        lastNameInput,
        pwInput,
        mailInput,
        messageInput,
        phoneNumberInput,
        regularInput,
        firstNameChange: firstNameChangeHandler,
        lastNameChange: lastNameChangeHandler,
        pwChange: pwChangeHandler,
        emailChange: emailChangeHandler,
        messageChange: messageChangeHandler,
        phoneNumberChange: phoneNumberChangeHandler,
        regularInputChange: regularInputChangeHandler,
        forgotPwHandler,
        newUserHandler,
        existingUserHandler,
        forgotPw,
        validLoginAuth,
        validSignupAuth,
        proLogin: proLoginHandler,
        empLogin: employerLoginHandler,
        logout: logoutHandler,
        proSignup: proSignupHandler,
        empSignup: employerSignupHandler,
        firstNameValid,
        lastNameValid,
        pwValid,
        mailValid,
        phoneNumberValid,
        firstNameTouched,
        lastNameTouched,
        pwTouched,
        mailTouched,
        phoneNumberTouched,
        clearInputs,
        dark,
        themeToggler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
