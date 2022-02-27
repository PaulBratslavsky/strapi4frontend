import { useState, useEffect } from "react";

function getStoredValues(key, defaultValue) {
  console.log(defaultValue.loggedIn === false);
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key))
    : defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  console.log(defaultValue)
  const [value, setValue] = useState(() => getStoredValues(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
