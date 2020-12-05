//Heri laver jeg bindings mellem html og js filen for registrer siden. 
//Ved at lave binding kan jeg tilgå elementerne i HTML filen og tilføje funktionalitet til dem
// Bruger querySelector. For at få fat i en 'class' bruger vi punktum, hvis vi skal have fat i id'erne kan vi bruge hashtag


const firstnameInput = document.querySelector('#firstname');
const lastnameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const birthdayInput = document.querySelector('#birthday');
const genderInput = document.querySelector('#gender');
const interestInput = document.querySelector('#interest');

const saveRegUserBtn = document.querySelector('#saveRegUser');

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
    document.querySelector('form').reset(); //jeg reseter for at fjerne de værdier der er indtastet i formen

    console.warn('added', JSON.stringify(createUsers));

    //gemmer til localestorage:
    localStorage.setItem('createUsersList', JSON.stringify(createUsers));
}

document.addEventListener('DOMContentLoaded', function(){
    saveRegUserBtn.addEventListener('click', createUser);  
});

