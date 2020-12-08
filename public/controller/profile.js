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
function logoutUser(){
//LAV FUNKTION!
}
    //Delete account:  
const deleteBtn = document.getElementById('deleteBtn');
function deleteUser() {
    deleteBtn.addEventListener('click', function(e){   
        const deleteuser = localstorage.removeItem('UsersList'); 
//Da funktionaliteten i login siden er, at en bruger kun kan logge ind via. informationer i localstorage passer denne løsning på "delete user" til loginfunktionaliteten
    }) //Hvis brugeren skulle fjernes fra JSON filen kunne jeg have brugt splice, der gør det muligt at vælge et element i et array, og fjerne det.
        alert("Your user has been deleted")
        window.location.href = "/login.js"
    }


    //Update profile - her require jeg functionen updateUser, som jeg har lavet i routes.js - binder JSON og de indtastede informationer i UPDATE USER formularen sammen
let updatedUser = require(updateUser());
fs.writeFile('./users.json', JSON.stringify(updatedUser, null, 2), (err) => {
    if (err) throw err;
    console.log('user has been added to database');
}) 

    // Like:

function like() {
    let likebtn = document.getElementById('likeOtherUserbtn');    
    likebtn.addEventListener('click', function() {
            
    })
    // lav if statement sådan da man kommer videre til en anden bruger hvis man har enten liket eller disliket 
}
//Dislike:

function dislike() {
}
    // Remove match
//vis info om match
//fs.("/match/info", (req, res)=>{
    //algoritme? :https://evdokimovm.github.io/javascript/nodejs/2016/11/11/write-data-to-local-json-file-using-nodejs.html

//})