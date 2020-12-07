fetch("/model/users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data[3].username)
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




//læser data fra json filen og parser den således at den bliver til et js objekt jeg kan bruge:
let existingUsers= fetch('/model/users.json', (err, jsonString) => {
    if (err) {
        console.log("Could not access or read from file:", err)
        return
    }
    try {
        const existingUsers = JSON.parse(jsonString)
        console.log(existingUsers)
} catch(err) {
        console.log('Error parsing JSON string:', err)
    }
});

//updateUser -> overskriver data.json filen med den nye bruger... 
/*router.post("/register", (req,res) => {

    let newUser=(
        req.body.firstName,
        req.body.lastname,
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.birthday,
        req.body.gender,
        req.body.interest,
        []
    )
    fs.writeFile('./users.json', JSON.stringify(newUser, null, 2), (err) => {
        if (err) throw err;
        console.log('user has been added to database');
    });
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
  
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
  
    let logInData = {
      email: emailValue,
      password: passwordValue
    };

    const username = usernameInput.value; 
    const passwordInput = passwordInput.value; 
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