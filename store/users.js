const users = [
  {
    id: 1,
    name: "parakrama",
    email: "parakrama@payceylon.com",
    password: "12345",
  },
  {
    id: 2,
    name: "Dilan",
    email: "dilan@domain.com",
    password: "12345",
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};
