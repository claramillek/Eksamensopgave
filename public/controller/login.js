//I denne fil er der localstorage funktionalitet samt login funktion.
//Ved at lave binding kan jeg tilgå elementerne i HTML filen og tilføje funktionalitet til dem
// Bruger document.getElementbyId til at få fat i elementerne i HTML filen. 
//localstorage:
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const subUserBtn = document.getElementById('saveUser');

let users = [];
const saveUserLogin = function(e){ //e = event
    e.preventDefault(); //her overvrider vi submitknappens default funktion, hvilket betyder, at jeg nu kan bestemme dens funktionalitet. Den fortæller browseren, at den ikke skal submitte formen med det samme.
    let user = {
        username: usernameInput.value,
        password: passwordInput.value
    }
    users.push(user); //tilføjer den indtastede bruger til det users array jeg har lavet længere oppe
    document.getElementById('login-form').reset(); //her kaldes metoden 'reset' sådan at registrer formen "tømmes" og dermed reseter. Det medfører, at værdierne fra felterne forsvinder

    console.warn('User added to localstorage', JSON.stringify(users)); //stringifyer min users, fordi localstorage kun kan læse/forstå strings

    //gemmer til localstorage:
    localStorage.setItem('UsersList', JSON.stringify(users));
}
document.addEventListener('DOMContentLoaded', function(){
    subUserBtn.addEventListener('click', saveUserLogin);  
}); 


//login funktion der burde gælde, for brugerne indstastet i JSON:

const loginBtn = document.getElementById("submitUser");
const loginErrorMsg = document.getElementById("login-error-msg");
username = usernameInput
password = passwordInput

loginBtn.addEventListener("click", function(e) {
    e.preventDefault();
   
    fetch("/model/users.json")
    .then(response => response.json())
    .then(data => {
        //reqUsername = (data[i].username)
        //reqPassword = (data[i].password)
        //data.map(i => i.value)

    for (var i = 0; i < data.length; i++) { //'data' er det data jeg trækker fra min JSON fil.
    if (username === data.map(i,i.username) && password === data.map(i,i.password)) { 
    alert("You have successfully logged in.");
    window.location.href = '/profile';
    } else {
    loginErrorMsg.style.opacity = 1;
      }
    }
  })
  })

//Nedenstående er gjort, for at vise funktionaliteten, som var ment skulle gælde for overstående løsning.
//I nedenstående eksempel bruges username og password der er gemt i localstorage til at give brugeren adgang til profil-siden
  const loginUser = function(e){ 
  e.preventDefault();  
    let username = usernameInput.value; 
    let password = passwordInput.value; 
    let storedUser = JSON.parse(localStorage.getItem("UsersList")); 

    if (username === storedUser[0].username && password === storedUser[0].password) {
    alert("You have successfully logged in.");
    window.location.href = '/profile';
    } else {
    loginErrorMsg.style.opacity = 1;
    }
  }; 
  document.addEventListener('DOMContentLoaded', function(){
    loginBtn.addEventListener('click', loginUser);  
});