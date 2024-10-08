export const formatDate = (
  day?: number,
  month?: number,
  year?: number
): Date => {
  const paddedMonth = String(month).padStart(2, "0");
  const paddedDay = String(day).padStart(2, "0");
  return new Date(`${year}-${paddedMonth}-${paddedDay}`);
};

export const loadImage = (urlEndpoint: string) => {
  return `https://image.tmdb.org/t/p/w500${urlEndpoint}`;
};
