export const getItem = (key: string): string => {
  const value: string = localStorage.getItem(key) as string;
  return value;
};
