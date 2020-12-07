//Forbinder til JSON filen
fetch("/model/users.json")


let users = [
    {
    firstname: "Peter",
    lastname: "Jakobsen",
    email: "p.jakobsen@gmail.com",
    username: "p.jako",
    password: "etPassword432",
    birthday: "12-23-1987",
    gender: "male",
    interest: "female"
    },
    {
    firstname: "Nicole",
    lastname: "Soerensen",
    email: "n.s@live.com",
    username: "nicoles",
    password: "nicole31y",
    birthday: "08-05-1995",
    gender: "female",
    interest: "male"
    }
]
//register functionality:
function registerUser(){
    let newFirstname = document.getElementById('firstname').value;
    let newLastname = document.getElementById('lastname').value;
    let newEmail = document.getElementById('email').value;
    let newUsername = document.getElementById('regUsername').value;
    let newPassword = document.getElementById('regPassword').value;
    let newBirthday = document.getElementById('birthday').value;
    let newGender = document.getElementById('gender').value;
    let newInterest = document.getElementById('interest').value;

    let newUser = {
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
        username: newUsername,
        password: newPassword,
        birthday: newBirthday,
        gender: newGender,
        interest: newInterest,
    }
    users.push(newUser);
    console.log(users);
} //lige nu er der problemer med, at den hverken gemmer informationerne og "resetter" hver gang man har udfyld alt felterne i register formen

//Heri laver jeg bindings mellem html og js filen for registrer siden. 

//localstorage
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('regUsername');
const passwordInput = document.getElementById('regPassword');
const birthdayInput = document.getElementById('birthday');
const genderInput = document.getElementById('gender');
const interestInput = document.getElementById('interest');

const saveRegUserBtn = document.getElementById('saveRegUser');

let createUsers = []; //Ved at definere et createUser som array kan jeg gemme flere ting i localstorage - det gøres fordi der i setItem kun normal er en key og en value
const createUser = function(ev){ //ev = event
    ev.preventDefault(); //her overvrider vi submitknappens default funktion, hvilket mulliggøre, at vi nu kan bestemme dens funktionalitet. Fortæller browseren, at den ikke skal submitte formen med det samme.
    let newUser = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        email: emailInput.value,
        username: usernameInput.value,
        password: passwordInput.value,
        birthday: birthdayInput.value,
        gender: genderInput.value,
        interest: interestInput.value
    }
    createUsers.push(newUser); //tilføjer den indtastede bruger til det users array jeg har lavet længere oppe
    document.getElementById("reg-form").reset(); //jeg reseter for at fjerne de værdier der er indtastet i formen

    console.warn("added", JSON.stringify(createUsers));

    //gemmer til localestorage:
    localStorage.setItem("createUsersList", JSON.stringify(createUsers));
}

document.addEventListener("DOMContentLoaded", function(){
    saveRegUserBtn.addEventListener("click", createUser);  
});

// når der trykkes på "save information" knappen på siden bliver informationen gemt
/*createBtn.addEventListener("click", function register() { 
    e.preventDefault();

    let firstname = firstnameInput.value
    let lastname = lastnameInput.value
    let email = emailInput.value
    let username = usernameInput.value;
    let password = passwordInput.value; 
    let birthday = birthdayInput.value

 
})
    //Når en ny bruger registrerer sig vil vi gerne gemme brugerens informationer i "databasen", som i dette tilfælde er JSON.filen
    //let storedRegUser = JSON.parse(localStorage.getItem("createUsersList")); 


    //const gender = genderInput.value
    //const interest = interest.value
    /*if (firstname === storedRegUser[0].firstname && lastname === storedRegUser[0].lastname && email === storedRegUser[0].email && username === storedRegUser[0].username && password === storedRegUser[0].password && birthday === storedRegUser[0].birthday) { //se overstående kommentering
        alert("You are now registered and ready to use Match!");
        window.location.href = '/profile';
        } else {
        createErrorMsg.style.opacity = 1;
        }
    })*/