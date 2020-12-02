
// Load the Snowflake Node.js driver.
var snowflake = require('snowflake-sdk')

class Snowflake {

    #statement = null

    constructor(account, username, password, database) {
        // Create a Connection object that we can use later to connect.
        this.connection = snowflake.createConnection({
            account: account,
            username: username,
            password: password,
            database: database
        })
    }

    // Try to connect to Snowflake, and check whether the connection was successful.
    connect() {
        this.connection.connect( function (err, conn) {
            if (err) {
                console.error('Unable to connect: ' + err.message)
            }
            else {
                console.log('Successfully connected to Snowflake.')
            }
        })
    }

    // Execute une requête sql en fonction des paramètres reçus
    query(sqlText, binds) {
        this.statement = this.connection.execute({
            sqlText: sqlText,
            binds: binds,
            complete: function (err, stmt, rows) {
                if (err) {
                    console.error('Failed to execute statement due to the following error: ' + err.message);
                } else {
                    console.log('Number of rows produced: ' + rows.length);
                }
            }
        })
    }

    // Afficher les résultats reçus lors d'une recherche (select)
    showResult() {
        let stream = this.statement.streamRows()
        this.statement = null

        stream.on('error', function (err) {
            console.error('Unable to consume all rows');
        })

        stream.on('data', function (row) {
            console.log(row)
        })

        stream.on('end', function () {
            console.log('All rows consumed');
        })
    }

    // Met fin à la connexion
    close() {
        this.connection.destroy(function (err, conn) {
            if (err) {
                console.error('Unable to disconnect: ' + err.message);
            } else {
                console.log('Disconnected connection with id: ' + this.connection.getId());
            }
        })
    }
}

module.exports = Snowflake
