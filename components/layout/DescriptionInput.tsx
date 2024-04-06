import React, { ChangeEvent, useState } from "react";

const DescriptionInput = () => {
  const [descriptionEntry, setDescriptionEntry] = useState("");

  const changeHandler = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };
  return (
    <div id="message-textarea" className="relative">
      <label
        htmlFor="Description"
        className="block sm:mb-2 ml-[2px] sm:text-lg md:text-xl text-md"
      >
        Description
      </label>
      <textarea
        id="message"
        name="message"
        minLength={10}
        maxLength={160}
        value={descriptionEntry}
        onChange={(e) => {
          changeHandler(e, setDescriptionEntry);
        }}
        className="w-[14rem] bg-white rounded-lg border border-gray-400 focus:border-color2 focus:ring-1 focus:ring-color2 h-[8.6rem] text-base outline-none text-gray-900 sm:py-1 sm:px-3 leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
    </div>
  );
};

export default DescriptionInput;
