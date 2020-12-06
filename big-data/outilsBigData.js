var uniqid = require('uniqid')
var faker = require('faker');
const jobsTemp = require('./jobs')

let eleves = []
let jobs = []
let profs = []
let notes = []
const nbProfs = 100
const nbEleves = 600

// Elèves
for (var i = 0; i < nbEleves; i++) {
    eleves.push([uniqid(), faker.name.findName()])
}

// Jobs
jobsTemp.jobs.forEach( function(job) {
    jobs.push([uniqid(), job])
})

// Profs
for (var i = 0; i < nbProfs; i++) {
    profs.push([uniqid(), faker.name.findName(), jobs[Math.floor(Math.random() * jobs.length)][0]])
}


eleves.forEach(eleve => {
    profs.forEach(prof => {
        const note = Math.floor(Math.random() * (10 - 4 + 1) + 4) // (max - min + 1) + min
        notes.push([uniqid(), note, eleve[0], prof[0]])
    })
})

exports.eleves = eleves
exports.intervenants = profs
exports.matieres = jobs
exports.notes = notes
