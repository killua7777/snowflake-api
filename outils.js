// Module permettant de générer un id unique
var uniqid = require('uniqid')

// Permet de lire et/ou écrire dans un fichier
const fs = require('fs')

// Lit le fichier json et récupére les données
let fichier = fs.readFileSync('data.json')
let data = JSON.parse(fichier)

// export des données sous forme de variable pour les utilisées dans un autre fichier
exports.notes = function () {
    let notes = []
    data.eleves.forEach(eleve => {
        data.intervenants.forEach(intervenant => {
            const note = Math.floor(Math.random() * 6) + 5
            notes.push([uniqid(), note, eleve[0], intervenant[0]])
        })
    })
    return notes
}

exports.eleves = data.eleves
exports.intervenants = data.intervenants
exports.matieres = data.matieres
