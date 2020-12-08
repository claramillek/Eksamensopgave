fetch("/model/users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data[3].username) //her får jeg fat i én af personernes username fra min JSON fil.
        //for (var i = 0; i < users.length; i++)
    })

let firstnames, lastnames, emails, usernames, passwords, birthdays, genders, interests;
let userArray = {};

let showRegisteredUsers = function(){
    for (let property in userArray){ //for-in loop
        console.log(property);
        console.log(userArray[property]);
    };
}
fetch("/model/users.json")
.then (function(res){
    return res.json();
})
.then(function(data){ //hernede tildeler jeg min variable noget data
    //console.log(data);
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
        router.get("/:firstname", (req, res)=>{
           put.JSON(json.stringify("firstname")) //ved at bruge 'put' tilføjer jeg de opdaterede informationer til min json fil
            }), 

        router.get("/:lastname", (req, res)=>{
            put.JSON(json.stringify("lastname"))
            }),

        router.get("/:email", (req, res)=>{
           put.JSON(json.stringify("email"))
            }),

        router.get("/:username", (req, res)=>{
            put.JSON(json.stringify("username"))
            }),
        router.get("/:password", (req, res)=>{
            put.JSON(json.stringify("password"))
        }),
        router.get("/:interest", (req, res)=>{
            put.JSON(json.stringify("interest"))
        })   
    })
}
module.exports = updateUser;

//Forsøg på at tilføje data til JSON fil:
/*let obj = {
    users: []
};
//let jsonFile = require("jsonfile");
const { dirname } = require("path");
for (i = 0; i < obj.length; i++){
    fs.writeFile(__dirname+"view/users.json", "firstname: " + data[i].firstname + "lastname: " + data.[i].lastname);
}
let json = JSON.stringify(obj);
fs.writeFile('users.json', json, "utf-8", function readFile(err,data){
   if (err){
       console.log(err);
   } else {
       obj = JSON.parse("users.json"); //laver det til et objekt
       obj.users.push({ //jeg tilføjer (push) objektet til users array'et.
        firstname: "data.[i].firstname", //her tilføjer jeg firstname til JSON array'et
        lastname: "data[i].lastname"
       });
       json = JSON.stringify(obj); //ved at bruge stringify laver jeg dataen om til JSON format igen.
       fs.writeFile("users.json", json, "utf-8")
   }
})*/
