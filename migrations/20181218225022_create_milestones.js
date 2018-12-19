
// knex.schema.withSchema('public').createTable('users', function (table) {
//   table.increments();
// })


exports.up = function(knex, Promise) {
  // knex.schema.createTable('users', function(Table) {
  //   table.increments();
  //   table.string('name');
  //   table.string('city');
  // })
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('name');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
