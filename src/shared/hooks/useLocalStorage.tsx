import { useState } from 'react';

function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.warn('Parsing error on', { value });
    return undefined;
  }
}

function useLocalStorage<T>(
  key: string,
  initialValue: T
): { storedValue: T; storeValue: (v: T) => void; clearStorage: () => void } {
  function readValue(): T {
    try {
      const item = localStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }

  const [storedValue, setStoredValue] = useState<T>(readValue);

  function storeValue(value: T) {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;

      localStorage.setItem(key, JSON.stringify(newValue));

      setStoredValue(newValue);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }

  function clearStorage() {
    localStorage.removeItem(key);
  }

  return { storedValue, storeValue, clearStorage };
}

export default useLocalStorage;
