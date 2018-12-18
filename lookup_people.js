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

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  client.query("SELECT first_name, last_name, birthdate from famous_people where first_name = $1", input, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    // console.log(result.rows[0]);
    console.log("the ans: ", result.rows);
    client.end();
  })
})

