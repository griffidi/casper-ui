import { useEffect, useState } from 'react';

/**
 * A custom hook that debounces a value.
 *
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds. Default is 500ms.
 * @returns The debounced value.
 */
export function useDebounce(value: string, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
