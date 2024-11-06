export const normalizeDate = (date: string) => {
  const parsedDate = new Date(date);
  return `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${parsedDate.getDate().toString().padStart(2, '0')}`;
};
