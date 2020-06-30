
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          comment: 'An expert maintenance team needed to fix this issue', issue_id: 1 , user_id: 1
        }
      ]);
    });
};
