// ved at lave et API endpoint, så kan jeg fetche JSON filen fra backend til frontend
//frontend sender request til vores API, der sender json filen til frontend

const { response } = require('express');
const express = require('express');
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const profileController = require('./public/controller/profile');
const registerController = require('./public/controller/register');
const loginController = require('./public/controller/login')
//ved at sige app.use og kalde metoden express.static får jeg fat i alle mine statiske filer (html, CSS og billeder) 
app.use(express.static('public')); //jeg har lagt alle mine filer ind i view mappen - det gør, så alle min js, html og css filer kan arbejde sammen
app.use(express.json({ limit: '10mb' }));


    //jeg laver her ruten til forsiden, som bliver login siden.
        app.get("/", function(req, res) {
            res.sendFile(__dirname + "/public/login.html");
    })

//rute til register side:
    app.get("/register", function(req, res) {
        res.sendFile(__dirname  + "/public/register.html");
    })
/*  Forsøg på at gemme data for dem der registrerer sig:  
    app.post('/register', (req, res) => {

        let createUser = JSON.parse(fs.readFileSync('public/model/users.json'))
        
        //Sørger for at username er unikt ved at tjekke med User.json
        for (var i = 0; i < createUser.length; i++){
            if (createUser[i].usernameValue == req.body.usernameValue){
                res.json('fail')
            }
        }
        createUser.push(req.body)
        res.json(createUser)
    
        fs.writeFile('/view/users.json', JSON.stringify(createUser, null, 2), (err) => {
            if (err) throw err;
            console.log('Data written to file');
        })
    });
*/
//rute til profile side:
    app.get("/profile", function(req, res) {
        res.sendFile(__dirname +"/public/profile.html");
    });
app.listen(3400);

module.exports = app;

