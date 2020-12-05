//const { get } = require("http");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("submitUser");
const loginErrorMsg = document.getElementById("login-error-msg");

loginBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let username = usernameInput.value; //gjort for at give eksempel på når det fungerer
    let password = passwordInput.value; //gjort for at give eksempel på når det fungerer
    let storedUser = JSON.parse(localStorage.getItem("UsersList")); //skal jeg bruge JSON.parse her for at tage localstorage data og gøre det læseligt for javascript igen?

    //for (i = 0; i < userArray.lenght; i++) { //userarray = JSON fil. jeg skal lave et for-loop med en if statement inden i - placering i array er i (index nummer)
    if (username === storedUser[0].username && password === storedUser[0].password) { //se overstående kommentering
    alert("You have successfully logged in.");
    window.location.href = '/profile';
    } else {
    loginErrorMsg.style.opacity = 1;
    }
})
//var userArray = JSON.parse(data)
   /*fetch("http://localhost:3400/hardCodeUser",{ //jeg skal fetche min data fra JSON og bruge den i for-loopet som userArray
    method: GET,
    Headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify()
    (response => {
       return response.json();
    })
    .then(data => console.log(data));*/
    //function login(){   
    // forsøg på at få de hardcodede user ind på serveren, så det er deres login info der gælder
   /* fetch('./hardCodeUser.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log('Logged in:', data);
        localStorage.setItem("loggedIn", JSON.stringify(data))  // Create a local storage, with the key "loggedIN" and data (email + password)
        window.location="profile.html" // Sends the user to profile.HTML     
        console.log(data)
    })
    .catch((error) => {
        console.error('Error:', error);
      });*/

/*function login(){
  
    var emailValue = document.getElementById("emailLogIn").value;
    var passwordValue = document.getElementById("passwordLogIn").value;
  
    let logInData = {
      email: emailValue,
      password: passwordValue
    };
    const usernameInput = document.getElementById('username').value; 
    const passwordInput = document.getElementById('password').value; 
    let storedUser = {
        username: usernameInput,
        password: passwordInput
    }
  
  
    fetch('http://localhost:3400/hardCodeUser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(storedUser),
      })
      .then(response => response.json())
      .then(data => {
        //console.log('Logget ind:', data);
        //localStorage.setItem("loggedIn", JSON.stringify(data))  // Create a local storage, with the key "loggedIN" and data (email + password)
        //window.location="home.html" // Sends the user to home.HTML 
        console.log(data)
      })
    /*
      .catch((error) => {
        console.error(error);
      });
    }

    const username = document.getElementById('username');
    const password = document.getElementById('password');


function checkLogin(user){
    fetch('http://localhost:3400/hardCodeUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }).then(res => res.json())
      .then(data => 
          {
        alert('Your account has successfully been created');
        location.href="profile.html"
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      };*/