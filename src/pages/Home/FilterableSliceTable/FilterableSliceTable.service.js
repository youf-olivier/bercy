const getSliceUrl = (selectedYear) => `/Slices?year=${selectedYear}`;

export const getSlices = async (selectedYear) => {
  const response = await fetch(getSliceUrl(selectedYear));
  const data = await response.json();
  return data;
};
