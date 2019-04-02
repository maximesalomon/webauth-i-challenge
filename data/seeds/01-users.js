
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Gabe', password: 'fewfewfgewerwgrewgreg', bio: 'This is my bio'},
        { name: 'Orlando', password: 'fewfewfgewerwgrewfvwerfewgreg', bio: 'This is my bio'},
        { name: 'Samar', password: 'fewfewfvgrewgfwgewerwgrewgreg', bio: 'This is my bio'},
      
      ]);
    });
};
