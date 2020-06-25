
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        {
          id: 1, 
          upVoted: true, 
          issue_id: 1
        }
      ]);
    });
};
