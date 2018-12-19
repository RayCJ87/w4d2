
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('2nd', function (table) {
      table.increments();
      table.integer('famous_person_id');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('2nd')
  ])
};
