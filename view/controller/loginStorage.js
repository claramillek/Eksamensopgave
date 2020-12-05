//Heri laver jeg bindings mellem html og js filen for login. 
//Ved at lave binding kan jeg tilgå elementerne i HTML filen og tilføje funktionalitet til dem
// Bruger querySelector. For at få fat i en 'class' bruger vi punktum, hvis vi skal have fat i id'erne kan vi bruge hashtag

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const subUserBtn = document.querySelector('#saveUser');

let users = [];
const loginUser = function(ev){ //ev = event
    ev.preventDefault(); //her overvrider vi submitknappens default funktion, hvilket mulliggøre, at vi nu kan bestemme dens funktionalitet. Fortæller browseren, at den ikke skal submitte formen med det samme.
    let user = {
        username: usernameInput.value,
        password: passwordInput.value
    }
    users.push(user); //tilføjer den indtastede bruger til det users array jeg har lavet længere oppe
    document.querySelector('form').reset(); //jeg reseter for at fjerne de værdier der er indtastet i formen

    console.warn('added', JSON.stringify(users)); //stringifyer min users, fordi localstorage kun kan læse/forstå strings

    //gemmer til localestorage:
    localStorage.setItem('UsersList', JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', function(){
    subUserBtn.addEventListener('click', loginUser);  
});