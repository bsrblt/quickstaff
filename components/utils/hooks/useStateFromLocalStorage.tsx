import { useState, useEffect, Dispatch, SetStateAction } from "react";

type LocalStorageHook<T> = [T, Dispatch<SetStateAction<T>>];

const useStateFromLocalStorage = <T,>(
  key: string,
  initialValue: T
): LocalStorageHook<T> => {
  const storedValue = localStorage.getItem(key);

  const initial = storedValue ? (JSON.parse(storedValue) as T) : initialValue;

  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStateFromLocalStorage;
