import { useState } from 'react';

/**
 * A custom hook that manages local storage state.
 *
 * @param {string} key The key under which the value is stored in local storage.
 * @param {unknown} defaultValue The default value to use if the key does not
 * exist in local storage.
 * @returns {[unknown, (newValue: unknown) => void]} An array containing the
 * stored value and a function to update it.
 */
export const useLocalStorage = <T = unknown>(
  key: string,
  defaultValue: unknown,
): [T, (newValue: T) => void] => {
  /**
   * Retrieves the value from local storage and initializes the state.
   *
   * @returns {unknown} The stored value or the default value.
   */
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch {
      return defaultValue;
    }
  });

  /**
   * Sets the value in local storage and updates the state.
   *
   * @param {T} newValue The new value to set.
   */
  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (e) {
      console.log(e);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
