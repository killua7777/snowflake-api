const { eleves, intervenants, matieres, notes } = require('./outilsBigData')
const Snow = require('./../Snowflake')


// Instance de la classe avec les paramètres de connexion
let snow = new Snow("qn87002.eu-central-1", "Roberto7", "Roberto@7", "UNIVERSITE")

// Teste la connexion
snow.connect()


// Insére des éléments dans la table MATIERES
snow.query("insert into matieres(ID, NOM) values(?, ?)", matieres)

// Insére des éléments dans la table INTERVENANTS
snow.query("insert into intervenants(ID, NOM, ID_MATIERE) values(?, ?, ?)", intervenants)

// Insére des éléments dans la table ELEVES
snow.query("insert into eleves(ID, NOM) values(?, ?)", eleves)

// Insére des éléments dans la table NOTES_INTERVENANT
snow.query("insert into notes_intervenant(ID, NOTE, ID_ELEVE, ID_INTERVENANT) values(?, ?, ?, ?)", notes)
