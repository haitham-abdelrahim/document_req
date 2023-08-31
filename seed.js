const mongoose = require('mongoose');
const Doc = require('./models/document');

mongoose.connect('mongodb://localhost:27017/docApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })




const seedArr = [
    {
        definition: "banana",
        number_of_doc: 1.75,
        category: "card",
        language: "english"
    },
    {
        definition: "Kiwi",
        number_of_doc: 3.55,
        category: "transkript",
        language: "english"
    },
    {
        definition: "domates",
        number_of_doc: 0.95,
        category: "certificate",
        language: "english"
    },
    {
        definition: "organic celery",
        number_of_doc: 4.00,
        category: "certificate",
        language: "english"
    },
    {
        definition: "Avocado",
        number_of_doc: 6.75,
        category: "certificate",
        language: "english"
    }
]


Doc.insertMany(seedArr)
    .then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })