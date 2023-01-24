import { useEffect, useState } from "react";

export const useDebounceValue = (value: string, time = 500) => {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);

  return debounceValue;
};
