import { useState, useEffect } from "react";

function getStoredValue(key, defaultValue) {
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key))
    : defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
