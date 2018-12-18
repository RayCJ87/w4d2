var settings = require('./settings');


var db = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

db('famous_people').insert([{first_name: 'Lebron', last_name: 'James', birthdate: '1985-04-16'}])
  .then(function() {

  });

db('famous_people').insert([{first_name: 'Donny', last_name: 'Trump', birthdate: '1955-03-18'}])
  .then(function() {

  });

db('famous_people').insert([{first_name: 'Jack', last_name: 'Reacher', birthdate: '1982-01-11'}])
  .then(function() {
    db.destroy();
  });