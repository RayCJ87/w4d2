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

// db.connect();

db.select('first_name', 'last_name', 'birthdate').from('famous_people')

  .then (function(result) {
    result.forEach(function(i){
      console.log(`- ${result.indexOf(i)+1}: ${i.first_name} ${i.last_name}, born '${i.birthdate.toDateString()}'`); }) })
