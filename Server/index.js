const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const uuid = require("uuid")
const app = express()

/** Middleware **/
app.use(express.static("client"))
// logger middlewere: logos every request to the server
app.use(morgan('dev'))

// always server to handle json requests, from request.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next()
})

// rest
let people = [{
    id: "6513846431",
    name: "ahmad",
    age: 21
}]

app.get("/people", (req, res) => {
    res.json(people)
})

app.get("/people/:id", (req, res) => {
    const id = req.params.id
    people.map(person => {
        if (person.id === id) {
            res.json(person)
        }
    })
    res.send({})
})

app.post("/people", (req, res) => {
    const person = {
        id: uuid(),
        ...req.body
    }
    people = people.concat([person])
    res.json(person)
})

app.listen(1000, () => console.log("App Started"))