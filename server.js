var { eleves, intervenants, matieres, notes } = require('./outils')
const Snow = require('./Snowflake')

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
let sqlText = "insert into notes_intervenant(ID, NOTE, ID_ELEVE, ID_INTERVENANT) values(?, ?, ?, ?)"
snow.query(sqlText, notes())


// Requête pour selectionner les éléments voulus
sqlText = "select * from notes_intervenant where NOTE > ?"
const filter = [8]
snow.query(sqlText, filter)
snow.showResult()

// Met fin à la connexion
// Ne marche pas car async
// snow.close()
