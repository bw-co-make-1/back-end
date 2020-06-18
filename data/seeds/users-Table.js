
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // await knex("users").truncate();
      return knex('users').insert([
        {
          id: 1,
          username: "user",
          password: "$2a$10$Lnt4H9lj6m/NsYH4sp5xWuF1NPIgxx3G.R2l7YlNwuMKnEiuZllTC",
          email: "user@email.com",
          first_name: "First Name User",
          last_name: "Last Name User",
          is_admin: false
        },
        {
          id: 2,
          username: "admin",
          password: "$2a$10$amOkC8UBBl.JyFUJdTyyAu/FGGPcFdP0BezD2WrbXM1dz1uYgsaqS",
          email: "admin@email.com",
          first_name: "First Name Admin",
          last_name: "Last Name Admin",
          is_admin: true
        }
      ]);
    });
};
