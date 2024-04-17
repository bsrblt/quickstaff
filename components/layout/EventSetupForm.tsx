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
  checkboxSolo: boolean;
  checkboxTeamwork: boolean;
}

type Action =
  | { type: "setStartDate"; payload: string }
  | { type: "setEndDate"; payload: string }
  | { type: "setSelectedCity"; payload: string }
  | { type: "setSelectedExp"; payload: string }
  | { type: "setcheckboxSolo"; payload: boolean }
  | { type: "setcheckboxTeamwork"; payload: boolean };

const initialState: State = {
  startDate: "",
  endDate: "",
  selectedCity: "default",
  selectedExp: "",
  checkboxSolo: false,
  checkboxTeamwork: false,
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
    case "setcheckboxSolo":
      return { ...state, checkboxSolo: action.payload };
    case "setcheckboxTeamwork":
      return { ...state, checkboxTeamwork: action.payload };
    default:
      return state;
  }
};

interface EventSetupFormProps {
  onSubmit: ({}) => void;
}

const EventSetupForm: React.FC<EventSetupFormProps> = ({ onSubmit }) => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputClass = getInputClasses(authCtx);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      Start: state.startDate,
      End: state.endDate,
      City: state.selectedCity,
      Experience: state.selectedExp,
      Solo: state.checkboxSolo,
      Teamwork: state.checkboxTeamwork,
    });
    const formData = {
      Start: state.startDate,
      End: state.endDate,
      City: state.selectedCity,
      Experience: state.selectedExp,
      Solo: state.checkboxSolo,
      Teamwork: state.checkboxTeamwork,
    };
    !(authCtx?.isLoggedInEmp || authCtx?.isLoggedInPro)
      ? router.replace("/employer/login")
      : onSubmit(formData);
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
    type: "checkboxSolo" | "checkboxTeamwork"
  ) => {
    dispatch({
      type: type === "checkboxSolo" ? "setcheckboxSolo" : "setcheckboxTeamwork",
      payload: e.target.checked,
    });
  };

  return (
    <form
      className="sm:grid -z-10 shadow-xl justify-start items-center bg-color2/70 pt-3 sm:pb-1 pb-4 px-4 rounded-b-xl sm:space-y-5 space-y-3 fontpop-3 w-[100%] text-white"
      onSubmit={submitHandler}
    >
      <section className="flex flex-col sm:flex-row md:gap-[1.25rem] sm:gap-4">
        <div id="dateinputs" className="space-y-4 mb-4 md:w-[14rem]">
          <div className="grid text-xl font-semibold  drop-shadow-xl">
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
          <div className="grid text-xl font-semibold  drop-shadow-xl">
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
        <div id="selectors" className="space-y-4  md:w-[13.8rem] ">
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
        <div className="space-y-4 md:w-[14rem] ">
          <div id="checkboxes" className="space-y-[0.91rem] sm:mt-0 mt-4 mb-2 ">
            <label
              htmlFor="collab"
              className="ml-[1px] sm:text-lg md:text-xl text-xl"
            >
              Collab
            </label>
            <Checkbox
              id="solo checkbox"
              checkbox={state.checkboxSolo}
              onChangeCheck={(e) => checkboxChangeHandler(e, "checkboxSolo")}
              checkboxText="Solo"
            />
            <Checkbox
              id="team checkbox"
              checkbox={state.checkboxTeamwork}
              onChangeCheck={(e) =>
                checkboxChangeHandler(e, "checkboxTeamwork")
              }
              checkboxText="Teamwork"
            />
          </div>
          <div className="text-lg md:w-[11.4rem]">
            <Button type="submit" text="Submit" />
          </div>
        </div>
      </section>
    </form>
  );
};

export default EventSetupForm;
