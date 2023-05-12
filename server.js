const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

console.log('We\'re cooking with grease baby')
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('movies')
    })

//MIDDLEWARE

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//READ***********************************
app.get('/', async (request, response) => {
    try {
        response.render('index.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})


//CREATE******************************/

app.post('/quotes', (request, response) => {
    console.log('create')
})

// UPDATE *********************/

app.put('/put', (request, response) => {
    console.log('update')
})

//DELETE**********************************/

app.delete('/delete', (request, response) => {
    console.log('Delete')
})



    app.listen(process.env.PORT || PORT, ()=> {
        console.log(`Server is running on port ${process.env.PORT || PORT}`)
    })

    