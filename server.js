// ved at lave et API endpoint, så kan jeg fetche JSON filen fra backend til frontend
//frontend sender request til vores API, der sender json filen til frontend

const express = require('express');
const app = express();
//SKAL FJERNES: henter cors - cors sørger for at andre servere kan tilgå dataen... https://www.youtube.com/watch?v=zoSJ3bNGPp0
const cors = require('cors')
app.use(cors())
app.use(cors());

//SKAL FJERNES: middleware : fs, body-parser - lader os tilgå JSON data https://www.youtube.com/watch?v=zoSJ3bNGPp0
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const fs = require('fs');
//ved at sige app.use og kalde metoden express.static får jeg fat i alle mine statiske filer (html, CSS og billeder) 
app.use(express.static('view'));

//jeg laver her ruten til forsiden, som bliver login siden.
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/view/login.html");

})
app.get("/register", function(req, res) {
    res.sendFile(__dirname  + "/view/register.html");
    })
app.get("/profile", function(req, res) {
    res.sendFile(__dirname +"/view/profile.html");
    })

// herunder vil jeg forsøge at connecte min server med min JSON fil, sådan at det der indtastes i serveren gemmes i json filen    
//
app.get("/users", (req,res)=>{
  let users = JSON.parse(fs.readFileSync("./model/data.json"))
  res.status(200).json(users)
})

//login
app.get("/user/:username", sendUser);
function sendUser(req,res){
    var data=req.params;
    res.send(data.user);
}

app.post("/create"), (req, res)=>{
  res
}

//create 
app.get("/create/:username", sendUser);
function addUser(req,res){
    var data=req.params;
    var username=data.username
    var newUsername=data.newUsername

    users[username]=newUsername;
    var data=JSON.stringify(users, null, 2);
    fs.writeFile("data.json", users)
}


app.listen(3400)
/*
const user = require("./controller/userController.js");
app.use("/user", user)*/
