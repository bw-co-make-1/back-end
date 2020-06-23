exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        {
          id: 1, 
          userId: '14', 
          postId: '13', 
          createdAt: '2020-06-23 03:05:00', 
          updatedAt: '2020-06-23 03:05:00'
        }
      ])
    })
}