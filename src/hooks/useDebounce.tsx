import { useEffect, useState } from "react";

export const useDebounce = <T,>(sourceValue: T, delay: number): T => {
  const [value, setValue] = useState<T>(sourceValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(sourceValue);
    }, delay);

    return () => {
      clearInterval(timerId);
    };
  }, [sourceValue, delay]);

  return value;
};
