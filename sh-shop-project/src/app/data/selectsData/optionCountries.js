import countries from "../basicData/initCountriesData";

export const optionCountries = countries.map((c) => ({
  value: c.id,
  label: c.name,
}));
