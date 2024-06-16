export const getDateFormat = (str: string) => {
  if (!str) return "";
  const date = new Date(str);
  return date.toLocaleString("vi-VN");
};
