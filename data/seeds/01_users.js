const bcryptjs = require("bcryptjs")


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 13, 
          username: 'Admin',
          password: bcryptjs.hashSync('password', 8),
          email: 'admin@admin.com',
          firstName: 'Admin',
          lastName: 'Admin',
          profilePhotoURL: 'https://i0.wp.com/cms.ironk12.org/wp-content/uploads/2020/02/no-person-profile-pic.png?ssl=1',
          isAdmin: true,
          createdAt: '2020-06-23 03:00:00',
          updatedAt: '2020-06-23 03:00:00'
        },
        {
          id: 14, 
          username: 'JohnDoe',
          password: bcryptjs.hashSync('1234567890', 8),
          email: 'j.doe@emails.com',
          firstName: 'John',
          lastName: 'Doe',
          profilePhotoURL: 'https://i0.wp.com/cms.ironk12.org/wp-content/uploads/2020/02/no-person-profile-pic.png?ssl=1',
          isAdmin: false,
          createdAt: '2020-06-23 03:00:00',
          updatedAt: '2020-06-23 03:00:00'
        },
      ])
    })
}