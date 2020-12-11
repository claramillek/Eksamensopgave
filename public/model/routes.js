const app = require("../../server");

fetch("/model/users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data[3].username) //her får jeg fat i én af personernes username fra min JSON fil.
    })

let firstnames, lastnames, emails, usernames, passwords, birthdays, genders, interests;
let userArray = {};

let showRegisteredUsers = function(){
    for (let property in userArray){ //for-in loop
        console.log(userArray[property]);
    };
}
fetch("/model/users.json")
.then (function(res){
    return res.json();
})
.then(function(data){
    firstnames = data.firstname; //ved at skrive data. værdien kan vi tilgå denne del af JSON filen
    lastnames = data.lastname;
    emails = data.email;
    usernames = data.username;
    passwords = data.password;
    birthdays = data.birthday;
    genders = data.gender;
    interests = data.interest;
    userArray = data;
    showRegisteredUsers();
});

function updateUser() {
    updateUserBtn.addEventListener('click', function (e){
//I nedenstående bruger jeg GET request til at få dataen fra 'Updater bruger' formularen på Profilsiden:
// forskel på router og app: https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get
        app.get("/:firstname", (req, res)=>{
           put.JSON(json.stringify("firstname", null, 2)) //ved at bruge 'put' tilføjer jeg de opdaterede informationer til min json fil
            }), 

        app.get("/:lastname", (req, res)=>{
            put.JSON(json.stringify("lastname", null, 2))
            }),

        app.get("/:email", (req, res)=>{
           put.JSON(json.stringify("email", null, 2))
            }),

        app.get("/:username", (req, res)=>{
            put.JSON(json.stringify("username", null, 2))
            }),
        app.get("/:password", (req, res)=>{
            put.JSON(json.stringify("password", null, 2))
        }),
        app.get("/:interest", (req, res)=>{
            put.JSON(json.stringify("interest", null, 2))
        })   
    })
}
module.exports = updateUser;

//Forsøg på at tilføje data til JSON fil:
/*let data = {
    users: []
};
//let jsonFile = require("/users.json");

for (i = 0; i < data.length; i++){
    fs.writeFile(__dirname+"/users.json", "firstname: " + data[i].firstname + "lastname: " + data.[i].lastname);
}
let json = JSON.stringify(data);
fs.writeFile('users.json', json, "utf-8", function readFile(err,data){
   if (err){
       console.log(err);
   } else {
       data = JSON.parse("users.json");
       data.users.push({ //jeg tilføjer (pusher) objektet til data variablen, som er et user array.
        firstname: "data.[i].firstname", //her tilføjer jeg firstname til JSON array'et
        lastname: "data[i].lastname" //her tilføjer jeg lastname til JSON array'et
       });
       json = JSON.stringify(data); //ved at bruge stringify laver jeg dataen om til JSON format igen.
       fs.writeFile("users.json", json, "utf-8")
   }
})*/
