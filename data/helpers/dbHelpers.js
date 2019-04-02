const knex = require("knex");
const knexConfig = require("../../knexfile");

const db = knex(knexConfig.development);

module.exports = {
    addUser,
    getUsers,
    getUser
};

function getUsers() {
  return db("users");
}

function getUser(id) {
  return db("users")
    .where("id", "=", id)
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(id => {
      return getUser(id[0]);
    });
}