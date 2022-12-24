const usersAddress = [
  {
    id: "address_1",
    userId: "user_1",
    firstName: "test_1",
    lastName: "test_test_1",
    street: "Kulas Light",
    house: "11",
    flat: "12",
    intercom: "12k",
    entrance: "1",
    floor: "3",
    city: "Gwenborough",
    postalCode: "90566-7771",
  },
  {
    id: "address_2",
    userId: "user_1",
    firstName: "test_111",
    lastName: "test_test_111",
    street: "Douglas Extension",
    house: "2",
    flat: "2",
    intercom: "2k",
    entrance: "2",
    floor: "1",
    city: "Gwenborough",
    postalCode: "90566-7771",
  },
  {
    id: "address_3",
    userId: "user_2",
    firstName: "test_2",
    lastName: "test_test_2",
    street: "Norberto Crossing",
    house: "4",
    flat: "6",
    intercom: "6k",
    entrance: "5",
    floor: "3",
    city: "Howemouth",
    postalCode: "58804-1099",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(usersAddress);
    }, 1000);
  });

const getUsersAddressesByUserId = (userId) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(usersAddress.filter((a) => a.userId === userId));
    });
  });

const getCurrentAddressById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(usersAddress.find((a) => a.id === id));
    });
  });

const functions = {
  fetchAll,
  getUsersAddressesByUserId,
  getCurrentAddressById,
};

export default functions;
