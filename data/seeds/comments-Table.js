
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comment: 'An expert maintenance team needed to fix this issue', user_id:2, issue_id: 1 }
      ]);
    });
};
