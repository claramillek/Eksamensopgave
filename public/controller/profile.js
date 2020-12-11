//Heri har jeg metoder/funktioner til at slette brugeren og opdaterer brugeren, like, dislike og match.

const { json } = require("body-parser");

    //Logout of account:
//const logoutBtn = document.getElementById('#logoutbtn');

function logout() {
    logoutBtn.addEventListener('click', function(e){
        e.preventDefault()
        alert ("You have logged out of your Match account")
        window.location.href = "login.html"
    })
}

    //Delete account:  
const deleteBtn = document.getElementById('deleteBtn');
function deleteUser() {
    deleteBtn.addEventListener('click', function(e){   
        let data = localstorage.getItem('UsersList');
        let deleteAccount = localstorage.removeItem(data[i].username + data[i].password); 
    }) //Hvis brugeren skulle fjernes fra JSON filen kunne jeg have brugt splice, der gør det muligt at vælge et element i et array, og fjerne det.
        alert("Your user has been deleted")
        window.location.href = "/login.js"
    }

    //Update profile - her require jeg functionen updateUser, som jeg har lavet i routes.js - binder JSON og de indtastede informationer i UPDATE USER formularen sammen
let updatedUser = require(updateUser());
fs.writeFile('/model/users.json', JSON.stringify(updatedUser, null, 2), (err) => {
    if (err) throw err;
    console.log('user has been added to database');
}); JSON.push(updatedUser) //forsøg på at pushe opdaterede bruger til JSON filen

    // Like:
function like() {
    let likebtn = document.getElementById('likeOtherUserbtn');    
    likebtn.addEventListener('click', function(e) {
        e.preventDefault()
        let user = fetch("/model/users.json")
            .then(user[i].like.push(req.body)) //req.body er den "likede" bruger
            .then(JSON.stringify(user, null, 2), (err) => {
                if (err) throw err;
                console.log('Adding the liked profile to your array of likes')
            })
            res.json('The liked userprofile has been added to the JSON file') 
        })
    }

    //Dislike:
function dislike() {
    let dislikeBtn = document.getElementById('dislikeOtherUserbtn');    
    dislikeBtn.addEventListener('click', function(e) {
    let data = fetch("/model/users.json")
        .then(response => response.json())
        .then(data => {
        console.log(data[3].user) //her er intentionen at få fat i én af personerne fra min JSON fil.
    }) //ikke færdiggjort. Ideen var at vise en ny bruger, hvis der blev trykket på dislike knappen
    })
}

    //Match:
function match(){
    let data = fetch("/model/users.json")
    for (var i = 0; i < data.length; i++) {
        if(data[i].like === data[j].like){ //forsøg på at lave en if statement, hvis de har hinanden i deres like array.
            alert("It's a MATCH!");
        } else {
                like(); /*her definere jeg, at hvis brugeren har liket en anden bruger, men den anden bruger ikke har liket 
                    dem endnu, så tilføjes den likede profil blot til data[i] brugerens like array, ved at kalde overstående like funktion */
       }
    }
}
    // Remove match:
function removeMatch(){
    let removeBtn = document.getElementById('removeMatchBtn');    
    removeBtn.addEventListener('click', function(e) {
        e.preventDefault()
        let data = fetch("/model/users.json")
        delete data[i].matches[j]
        //en anden mulig løsning er at bruge splice() og skrive den specifikke user ind i filter funktionen, dermed fjernes den også.
    })
}; res.json({ "message" : "Match has been deleted"});

    //List of all matches:
function allMatches(){
    let data = fetch("/model/users.json")
    matchList = data[i].matches
} json.push(matchList)

