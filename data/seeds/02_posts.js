exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 13, 
          title: 'Pot holes on 1st Street', 
          description: 'Pot holes on 1st Street between Washington and Adams', 
          postPhotoURL: 'https://www.gannett-cdn.com/-mm-/38b2e6935d2caa4e96e963348fcbb385c228e98b/c=6-0-2994-1688/local/-/media/2018/02/20/USATODAY/USATODAY/636547270227322875-022018Pothole-michigan.jpg?width=2988&height=1688&fit=crop&format=pjpg&auto=webp', 
          city: 'Bay City', 
          state: 'MI', 
          zipCode: '48706', 
          userId: 13, 
          createdAt: '2020-06-23 03:00:00', 
          updatedAt: '2020-06-23 03:00:00'
        }
      ])
    })
}