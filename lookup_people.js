var input = process.argv.slice(2);

const pg = require("pg");
const settings = require("./settings") // setting.json

const client = new pg.Client({
  user    : settings.user,
  password: settings.password,
  database: settings.database,
  host    : settings.hostname,
  port    : settings.port,
  ssl     : settings.ssl
});


client.connect();


  client.query("SELECT first_name, last_name, birthdate from famous_people where first_name = $1", input, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(`Found ${result.rows.length} person(s) by the name ${input[0]}`);
    for (let i = 0; i < result.rows.length; i++){
      console.log(`- ${i+1}: ${result.rows[i].first_name} ${result.rows[i].last_name}, born ${result.rows[i].birthdate.toDateString()}`);
    }
    client.end();
  });

// console.log(peopleByName("Paul"));
// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }

  // client.query("SELECT first_name, last_name, birthdate from famous_people where first_name = $1", input, (err, result) => {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  //   console.log(`Found ${result.rows.length} person(s) by the name ${input[0]}`);
  //   for (let i = 0; i < result.rows.length; i++){
  //     console.log(`- ${i+1}: ${result.rows[i].first_name} ${result.rows[i].last_name}, born ${result.rows[i].birthdate}`);
  //   }
//     // console.log(result.rows[0]);
//     // console.log("the ans: ", result.rows);
//     client.end();
//   });
// });


// module.exports = {
//   // peopleByName,
//   printResult,
//   close: () => {client.end(); }
// };

