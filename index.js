const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


const Doc = require('./models/document');

mongoose.connect('mongodb://localhost:27017/docApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.get('/doc', async (req, res) => {
    const docs = await Doc.find({});
    console.log(docs)
    res.render('documents/index', { docs })
});



app.get('/doc/new', (req, res) => {
    res.render('documents/new')
})

app.post('/doc', async (req, res) => {
    const newDoc = new Doc(req.body);
    await newDoc.save();
    res.redirect('/doc')
})

app.delete('/doc/:id', async (req, res) => {
    const documentId = req.params.id;
    await Doc.findByIdAndDelete(documentId);
    res.redirect('/doc');
})


app.listen(3000, () => {
    console.log("APP is listening on port 3000!")
})

