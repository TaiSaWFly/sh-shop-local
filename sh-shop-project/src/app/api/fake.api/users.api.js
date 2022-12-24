const users = [
  {
    id: "user_1",
    userName: "account_test_1",
    email: "test@test.com",
    phone: "+7111111",
    avatar: "",
    currentAddress: "address_1",
  },
  {
    id: "user_2",
    userName: "account_test_2",
    email: "test2@test.com",
    phone: "+722222",
    avatar: "",
    currentAddress: "",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users);
    }, 1000);
  });

const getUserById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users.find((u) => u.id === id));
    }, 1000);
  });

const functions = {
  fetchAll,
  getUserById,
};

export default functions;
