exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1, 
          text: "It's getting worse", 
          username: 'JohnDoe', 
          postId: '13', 
          userId: '14', 
          createdAt: '2020-06-23 03:00:00', 
          updatedAt: '2020-06-23 03:00:00'
        },
        {
          id: 2, 
          text: "Flat tires everywhere!", 
          username: 'JohnDoe', 
          postId: '13', 
          userId: '14', 
          createdAt: '2020-06-23 03:05:00', 
          updatedAt: '2020-06-23 03:05:00'
        }
      ])
    })
}