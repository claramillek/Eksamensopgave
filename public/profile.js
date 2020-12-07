//Heri har jeg metoder/funktioner til at slette brugeren og opdaterer brugeren, like, dislike og match.

//Logout of account:
const logoutBtn = document.getElementById('#logoutbtn');

function logout() {
    logoutBtn.addEventListener('click', function(e){
        e.preventDefault()
        logoutUser();
        alert ("You have been logged out")
        window.location.href = "login.html"
    })
}
//Delete account:  
const deleteBtn = document.getElementById('deleteBtn');
function deleteUser() {
    deleteBtn.addEventListener('click', function(e){   
        const deleteuser = localstorage.removeItem('UsersList'); 
//Da funktionaliteten i login siden er, at en bruger kun kan logge ind via. informationer i localstorage passer denne løsning på "delete user" til loginfunktionaliteten
    }) 
        alert("Your user has been deleted")
        window.location.href = "/login.js"
    }

const updateUserBtn = document.getElementById("updateUser")
//updater profil
let updatedUser = [];
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
//Herunder har jeg lavet en alternativ måde, hvorpå jeg kunne gemme data til min JSON fil
/*var fs = require('fs')

fs.readFile('/model/users.json', 'utf-8', function(err, updatedUser) {
	if (err) throw err

	var userArray = JSON.parse(updatedUser)
	userArray.push({
		name: "firstname",
        lastname: "lastname",
        email: "email",
        username: "username",
        password: "password",
        interest: "interest"
	})

	console.log(updatedUser)

	fs.writeFile('/model/users.json', JSON.stringify(updatedUser), 'utf-8', function(err) {
		if (err) throw err
		console.log('User has been updated!')
	})
})*/
// Like:

function like() {
}

//Dislike:

function dislike() {
}


//vis info om match
//fs.("/match/info", (req, res)=>{
    //algoritme? :https://evdokimovm.github.io/javascript/nodejs/2016/11/11/write-data-to-local-json-file-using-nodejs.html
    
//})