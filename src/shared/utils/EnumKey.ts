export const getEnumKey = <T extends Object>(
    enumObj: T,
    value: keyof T | unknown
  ): keyof T | null => {
    const keyValue = Object.entries(enumObj).find(([key, val]) => val === value);
    
  return keyValue ? keyValue[0] as keyof T : null;
  };