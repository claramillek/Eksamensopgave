// ved at lave et API endpoint, så kan jeg fetche JSON filen fra backend til frontend
//frontend sender request til vores API, der sender json filen til frontend

const { response } = require('express');
const express = require('express');
const app = express();
const fs = require('fs')
//SKAL FJERNES: henter cors - cors sørger for at andre servere kan tilgå dataen... https://www.youtube.com/watch?v=zoSJ3bNGPp0
const cors = require('cors')
const fetch = require("node-fetch");
const http = require('http');
//const port = process.env.PORT || 3400;
app.use(cors());

//SKAL FJERNES: middleware : fs, body-parser - lader os tilgå JSON data https://www.youtube.com/watch?v=zoSJ3bNGPp0
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ved at sige app.use og kalde metoden express.static får jeg fat i alle mine statiske filer (html, CSS og billeder) 
app.use(express.static('public')); //jeg har lagt alle mine filer ind i view mappen - det gør, så alle min js, html og css filer kan arbejde sammen
app.use(express.json({ limit: '10mb' }));


    //jeg laver her ruten til forsiden, som bliver login siden.
        app.get("/", function(req, res) {
            res.sendFile(__dirname + "/public/login.html");
    })


    /*let userData = JSON.parse(fs.readFileSync('./view/model/users.json'))
    
    //Sørger for at username er unikt ved at tjekke med User.json
    for (var i = 0; i < userData.length; i++){
        if (userData[i].usernameValue == req.body.usernameValue){
            res.json('failure')
        }
        userData.push(req.body)
        res.json(userData)
    }

    fs.writeFile('./view/model/users.json', JSON.stringify(userData, null, 4), function(err) {
        if (err) throw err;
        console.log('Data written to file');
    })*/

//});
/*fetch('localehost:3400/view/model/users.json').then(function(response) { //fetch metoden er god til JSON da den både forstår, læser og omdanner JSON så det passer til javascript
    //console.log(res);
    return response.json(); //omdanner "body" af JSON til javascript
}).then(function(obj){
    console.log(obj);
}). catch(function(error){
    console.error("Error");
    console.error(error);
})*/
//rute til register side:
    app.get("/register", function(req, res) {
        res.sendFile(__dirname  + "/public/register.html");
    })
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
//rute til profile side:
    app.get("/profile", function(req, res) {
        res.sendFile(__dirname +"/public/profile.html");
    })
app.listen(3400)

/*let obj = {
    table: []
};
//let jsonFile = require("jsonfile");
const { dirname } = require("path");
for (i = 0; i < obj.length; i++){
    fs.writeFile(__dirname+"view/users.json", "firstname: " + i + "lastname: " +j);
}

let json = JSON.stringify(obj);
fs.writeFile('users.json', json, "utf-8", function readFileCallback(err,data){
   if (err){
       console.log(err);
   } else {
       obj = JSON.parse("users.json"); //laver det til et objekt
       obj.table.push({
        firstname: "clara",
        lastname: "kaloe"
       });
       json = JSON.stringify(obj); //laver det om til JSON igen
       fs.writeFile("users.json", json, "utf-8")
   }
})*/


// herunder vil jeg forsøge at connecte min server med min JSON fil, sådan at det der indtastes i serveren gemmes i json filen    
//jeg skal parse OG stringify (når det sendes tilbage)
//let data = fs.readFileSync('users.json');
//let users = JSON.parse(data);



//app.listen(3400)
//eksempel som philip skrev ind i Claras kode: let users = JSON.parse(fs.readFileSync("./model/data.json"))
//res.status(200).json(users)

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

//login
app.get("/user/:username", sendUser);
function sendUser(req,res){
    var data=req.params;
    res.send(data.user);
}

app.post("/create"), (req, res)=>{
  res
}

/*fetch('http://localhost:3400/view/model/users.json').then(function(response) { //fetch metoden er god til JSON da den både forstår, læser og omdanner JSON så det passer til javascript
    //console.log(res);
    return response.json(); //omdanner "body" af JSON til javascript
}).then(function(obj){
    console.log(obj);
}). catch(function(error){
    console.error("Error");
    console.error(error);
})*/

/*fs.existsSync('users.json', function(exists) {

    if (exists) {

        console.log("yes file exists");

        fs.readFile('users.json', function readFileCallback(err, data) {

            if (err) {
                console.log(err);
            } else {
                obj = JSON.parse(data);

                for (i = 0; i < 5; i++) {
                    obj.table.push({
                        firstname: i,
                        lastname: j
                    });
                }

                let json = JSON.stringify(obj);
                fs.writeFile('users.json', json);
            }
        });
    } else {

        console.log("file not exists");

        for (i = 0; i < 5; i++) {
            obj.table.push({
                firstname: i,
                lastname: j
            });
        }

     
    }
});*/