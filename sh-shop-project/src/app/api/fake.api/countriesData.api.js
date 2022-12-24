const countriesArray = require("country-data-list").countries;
const countries = countriesArray.all.map((c, i) => ({
  id: i + c.alpha2,
  name: c.name,
}));

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(countries);
    }, 1000);
  });

const functions = {
  fetchAll,
};

export default functions;
