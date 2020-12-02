// Load the Snowflake Node.js driver.
var snowflake = require('snowflake-sdk');
var { genere_notes } = require('./outils')

// Create a Connection object that we can use later to connect.
var connection = snowflake.createConnection( {
    account: "qn87002.eu-central-1",
    username: "Roberto7",
    password: "Roberto@7",
    database: "UNIVERSITE"
    }
);

// Try to connect to Snowflake, and check whether the connection was successful.
connection.connect(
    function (err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message)
        }
        else {
            console.log('Successfully connected to Snowflake.')
        }
    }
)

// Insertion dans une table
let sqlText = 'insert into notes_intervenant(ID, NOTE, ID_ELEVE, ID_INTERVENANT) values(?, ?, ?, ?)'
const notes = genere_notes()
// console.log(notes)
// process.exit(1)
connection.execute({
    sqlText: sqlText,
    binds: notes,
    complete: function (err, stmt, rows) {
        if (err) {
            console.error('Failed to execute statement due to the following error: ' + err.message)
        } else {
            console.log('Successfully executed statement: ' + stmt.getSqlText())
        }
    }
})
