//Heri laver jeg bindings mellem html og js filen for login. 
//Ved at lave binding kan jeg tilgå elementerne i HTML filen og tilføje funktionalitet til dem
// Bruger querySelector. For at få fat i en 'class' bruger vi punktum, hvis vi skal have fat i id'erne kan vi bruge hashtag

const usernameDiv = document.querySelector('.username');
const passwordDiv = document.querySelector('.password');
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
//const subUsernameBtn = document.querySelector('#submitUsername');
//const subPasswordBtn = document.querySelector('#submitPassword');
const subUserBtn = document.querySelector('#submitUser');
//const h1 = document.querySelector('h1');
//const personalGreeting = document.querySelector('.personal-greeting');

form.addEventListener('submit', function(e){
    e.preventDefault(); //her overvrider vi submitknappens default funktion, hvilket mulliggøre, at vi nu kan bestemme dens funktionalitet
});

subUserBtn.addEventListener('click', function(){
    localStorage.setItem('user', usernameInput.value);
})
subUserBtn.addEventListener('click', function(){
    localStorage.setItem('password', passwordInput.value);
})

/*forgetBtn.addEventListener('click', function(){
    localStorage.removeItem('navn'); //Her skal vi ikke definere en value den skal fjerne, fordi 'removeItem' kun skal vide hvilken key den skal fjerne fra storage
})
overstående har vi altså lavet logikken til vores submit og forget button*/