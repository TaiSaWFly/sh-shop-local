const countriesArray = require("country-data-list").countries;
const countries = countriesArray.all.map((c, i) => ({
  id: i + c.alpha2,
  name: c.name,
}));

export default countries;
