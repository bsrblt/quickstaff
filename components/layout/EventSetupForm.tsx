import React, { useReducer, ChangeEvent, useContext } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import InputField from "./InputField";
import AuthContext from "../Ctx/AuthContext";
import getInputClasses from "../utils/inputClasses";
import CitySelector from "./CitySelector";
import ExpSelector from "./ExpSelector";
import Checkbox from "./Checkbox";

interface State {
  startDate: string;
  endDate: string;
  selectedCity: string;
  selectedExp: string;
  checkbox1: boolean;
  checkbox2: boolean;
}

type Action =
  | { type: "setStartDate"; payload: string }
  | { type: "setEndDate"; payload: string }
  | { type: "setSelectedCity"; payload: string }
  | { type: "setSelectedExp"; payload: string }
  | { type: "setCheckbox1"; payload: boolean }
  | { type: "setCheckbox2"; payload: boolean };

const initialState: State = {
  startDate: "",
  endDate: "",
  selectedCity: "default",
  selectedExp: "",
  checkbox1: false,
  checkbox2: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setStartDate":
      return { ...state, startDate: action.payload };
    case "setEndDate":
      return { ...state, endDate: action.payload };
    case "setSelectedCity":
      return { ...state, selectedCity: action.payload };
    case "setSelectedExp":
      return { ...state, selectedExp: action.payload };
    case "setCheckbox1":
      return { ...state, checkbox1: action.payload };
    case "setCheckbox2":
      return { ...state, checkbox2: action.payload };
    default:
      return state;
  }
};

interface EventSetupFormProps {
  onSubmit: (startDate: string, endDate: string, selectedCity: string) => void;
}

const EventSetupForm: React.FC<EventSetupFormProps> = ({ onSubmit }) => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputClass = getInputClasses(authCtx);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Start Date:", state.startDate);
    console.log("End Date:", state.endDate);
    console.log("City:", state.selectedCity);
    !(authCtx?.isLoggedInEmp || authCtx?.isLoggedInPro)
      ? router.replace("/employer/login")
      : onSubmit(state.startDate, state.endDate, state.selectedCity);
  };

  const changeHandler = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>,
    type: keyof State // The error is here
  ) => {
    switch (type) {
      case "startDate":
        dispatch({ type: "setStartDate", payload: e.target.value });
        break;
      case "endDate":
        dispatch({ type: "setEndDate", payload: e.target.value });
        break;
      case "selectedCity":
        dispatch({ type: "setSelectedCity", payload: e.target.value });
        break;
      case "selectedExp":
        dispatch({ type: "setSelectedExp", payload: e.target.value });
        break;
      default:
        break;
    }
  };

  const checkboxChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    type: "checkbox1" | "checkbox2"
  ) => {
    dispatch({
      type: type === "checkbox1" ? "setCheckbox1" : "setCheckbox2",
      payload: e.target.checked,
    });
  };

  return (
    <form
      className="sm:grid backdop-blur-[6px] shadow-xl bg-color1/70 pt-3 sm:pb-1 pb-4 px-4  mb-1 rounded-xl sm:space-y-5 space-y-3 fontpop-3 md:w-[44rem] w-[95%]"
      onSubmit={submitHandler}
    >
      <section className="flex flex-col sm:flex-row md:gap-10 sm:gap-4">
        <div className="space-y-4 mb-4 text-white">
          <div className="grid text-xl font-semibold text-white drop-shadow-xl">
            <label
              htmlFor="startdate"
              className="block ml-[2px] font-normal sm:text-lg md:text-xl text-md"
            >
              Starts @
            </label>
            <InputField
              id="startdate"
              type="date"
              required
              className={inputClass.dateInputClass}
              value={state.startDate}
              onChange={(e) => changeHandler(e, "startDate")}
            />
          </div>
          <div className="grid text-xl font-semibold text-white drop-shadow-xl">
            <label
              htmlFor="enddate"
              className="block ml-[2px] font-normal  sm:text-lg md:text-xl text-md"
            >
              Ends @
            </label>
            <InputField
              id="enddate"
              type="date"
              required
              className={inputClass.dateInputClass}
              value={state.endDate}
              onChange={(e) => changeHandler(e, "endDate")}
            />
          </div>
        </div>
        <div className="space-y-4 text-white">
          <CitySelector
            selectedCity={state.selectedCity}
            inputClass={inputClass.selectorClass}
            labelClass="block ml-[2px] font-normal  sm:text-lg md:text-xl text-md mb-2"
            onChange={(e) => changeHandler(e, "selectedCity")}
          />
          <ExpSelector
            notChosenText="- any -"
            labelClass="ml-[2px] sm:text-lg md:text-xl text-md md:mb-2 sm:mb-0 mb-2"
            selectedExp={state.selectedExp}
            inputClass={inputClass.selectorClass}
            onChange={(e) => changeHandler(e, "selectedExp")}
          />
        </div>
        <div className="space-y-4 md:w-[14rem]">
          <div className="space-y-[0.91rem] sm:mt-0 mt-4 mb-2 text-white">
            <label
              htmlFor="collab"
              className="ml-[1px] sm:text-lg md:text-xl text-xl"
            >
              Collab
            </label>
            <Checkbox
              id="solo checkbox"
              checkbox={state.checkbox1}
              onChangeCheck={(e) => checkboxChangeHandler(e, "checkbox1")}
              checkboxText="Solo"
            />
            <Checkbox
              id="team checkbox"
              checkbox={state.checkbox2}
              onChangeCheck={(e) => checkboxChangeHandler(e, "checkbox2")}
              checkboxText="Teamwork"
            />
          </div>
          <Button type="submit" text="Submit" />
        </div>
      </section>
    </form>
  );
};

export default EventSetupForm;
