import React from "react";

interface CollabCheckboxesProps {
  checkbox: boolean;
  onChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxText: string;
  id: string;
}

const Checkbox: React.FC<CollabCheckboxesProps> = ({
  checkbox,
  onChangeCheck,
  checkboxText,
  id,
}) => {
  return (
    <div className="space-y-[0.65rem] sm:mt-0 mt-4 mb-2">
      <label
        htmlFor={id}
        className="text-white sm:text-lg md:text-xl text-md cursor-pointer"
      >
        <input
          type="checkbox"
          id={id}
          checked={checkbox}
          onChange={onChangeCheck}
          className="h-4 w-4 mr-1 rounded-sm border border-silver checked:bg-color2"
        />{" "}
        {checkboxText}
      </label>
    </div>
  );
};

export default Checkbox;
