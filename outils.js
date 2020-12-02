var uniqid = require('uniqid');
const fs = require('fs')

let fichier = fs.readFileSync('data.json')
let data = JSON.parse(fichier)

exports.genere_notes = function() {
    let notes = []
    data.eleves.forEach(eleve => {
        data.intervenants.forEach(intervenant => {
            const note = Math.floor(Math.random() * 6) + 5
            notes.push([uniqid(), note, eleve[0], intervenant[0]])
        })
    })
    return notes
}

// Exécution d’instructions
// sqlText = "CREATE or REPLACE database testdb"

// statement = connection.execute({
//     sqlText: sqlText,
//     complete: function (err, stmt, rows) {
//         if (err) {
//             console.error('Failed to execute statement due to the following error: ' + err.message);
//         } else {
//             console.log('Successfully executed statement: ' + stmt.getSqlText());
//         }
//     }
// })


// afficher les données de la table test
// sqlText = "select * from test where EMAIL LIKE 'arthur%'"
// statement = connection.execute({
//     sqlText: sqlText,
//     binds: ['arthur'],
//     complete: function (err, stmt, rows) {
//         if (err) {
//             console.error('Failed to execute statement due to the following error: ' + err.message);
//         } else {
//             console.log('Number of rows produced: ' + rows.length);
//         }
//     }
// })

// Afficher les rusultats reçu 
// var stream = statement.streamRows()

// stream.on('error', function (err) {
//     console.error('Unable to consume all rows');
// })

// stream.on('data', function (row) {
//     console.log(row)
// })

// stream.on('end', function () {
//     console.log('All rows consumed');
// })

// Mettre fin à une connexion
// connection.destroy(function (err, conn) {
//     if (err) {
//         console.error('Unable to disconnect: ' + err.message);
//     } else {
//         console.log('Disconnected connection with id: ' + connection.getId());
//     }
// })