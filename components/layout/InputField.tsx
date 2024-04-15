import React from "react";

interface InputFieldProps {
  type: string;
  id: string;
  label?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean | undefined;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  min?: string;
}
const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  label,
  placeholder,
  minLength,
  maxLength,
  value,
  onChange,
  className,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 sm:text-sm text-xs pl-[2px] text-gray-600 dark:text-gray-200"
      >
        {label}
      </label>

      <input
        type={type}
        name={id}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};
export default InputField;
