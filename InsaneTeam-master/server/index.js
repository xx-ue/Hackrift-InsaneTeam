const express = require('express')
var app = express()
var con= require("./controller")
var bodyParser = require('body-parser')
var cors = require('cors')


app.use(cors())
var jsonParser = bodyParser.json()


app.get("/", (req,res)=> {
    res.send("Backend for Insane Sports App")
})

app.get("/getmatched", (req,res)=> {
    res.send(con.checkMatch())
})

app.post("/addparticipant", jsonParser, (req,res)=> {
    var ans = con.addParticipant(req.body)
    console.log(ans)
})

app.listen(5000, () => {console.log("Server started on port 5000")})