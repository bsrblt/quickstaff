import React, { ChangeEvent, useRef, useState } from "react";
import Button from "./Button";

const FileUploadInput: React.FC<{
  onChange: (file: File) => void;
  isValid: boolean;
}> = ({ onChange, isValid }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
      onChange(file);
    }
  };

  const truncateFileName = (fileName: string, maxLength: number) => {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const truncatedName = fileName.substring(0, maxLength - 3) + "...";
    return truncatedName;
  };

  const shortenedFileName = selectedFile
    ? truncateFileName(selectedFile.name, 20)
    : "*No file chosen*";

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex items-center justify-between max-w-xl p-1">
      <div className="grid items-center gap-1 pr-8">
        <label className="block text-sm font-medium text-white fontpop-3">
          Upload File:
        </label>
        <span
          className={`flex items-center text-white text-sm fontpop-3 ${
            isValid ? "" : "text-red-500"
          }`}
        >
          {shortenedFileName}
        </span>
      </div>
      <div className="mb-1">
        <Button type="button" onClick={handleButtonClick}>
          Browse
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileUploadInput;
