import React, { useState, ChangeEvent, useContext } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import InputField from "./InputField";
import AuthContext from "../Ctx/AuthContext";

const dateInputClass =
  "block sm:w-full sm:h-11 px-4 py-2 mt-2 landscape:mt-0 text-gray-700 placeholder-gray-400 border rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:focus:border-color2 dark:outline-none focus:ring-color2 focus:outline-none focus:ring-1 transition-colors duration-200 ease-in-out cursor-pointer";

interface DaterProps {
  onDateSubmit: (startDate: string, endDate: string) => void;
}
const Dater: React.FC<DaterProps> = ({ onDateSubmit }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    !(authCtx?.isLoggedInEmp || authCtx?.isLoggedInPro)
      ? router.replace("/employer/login")
      : onDateSubmit(startDate, endDate);
  };

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  return (
    <form
      className="sm:grid backdrop-blur-[6px] shadow-xl bg-white/20 p-4 landscape:p-3 mb-1 rounded-xl sm:space-y-5 space-y-3"
      onSubmit={submitHandler}
    >
      <section className="flex flex-col group sm:flex-row md:space-x-2 landscape:space-x-2 sm:landscape:space-y-0 fontpop-2 gap-2">
        <div className="grid sm:text-2xl text-xl font-bold text-white drop-shadow-xl">
          <label
            htmlFor="startdate"
            className="ml-[2px] sm:text-lg md:text-xl text-md"
          >
            Starts @
          </label>
          <InputField
            id="startdate"
            type="date"
            required
            className={dateInputClass}
            value={startDate}
            onChange={(e) => changeHandler(e, setStartDate)}
          />
        </div>
        <div className="grid sm:text-2xl text-xl font-bold text-gray-100  drop-shadow-xl">
          <label
            htmlFor="enddate"
            className="ml-[2px] sm:text-lg md:text-xl text-md"
          >
            Ends @
          </label>
          <InputField
            id="enddate"
            type="date"
            required
            className={dateInputClass}
            value={endDate}
            onChange={(e) => changeHandler(e, setEndDate)}
          />
        </div>
      </section>
      <Button type="submit" text="Submit" />
    </form>
  );
};

export default Dater;
