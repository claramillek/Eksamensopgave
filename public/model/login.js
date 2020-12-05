
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("submitUser");
const loginErrorMsg = document.getElementById("login-error-msg");

var userArray = JSON.parse(data)
   /*fetch("./hardCodeUser.json") //jeg skal fetche min data fra JSON og bruge den i for-loopet som userArray
    .then(response => {
       return response.json();
    })
    .then(data => console.log(data));*/
loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    const username = usernameInput.value; //gjort for at give eksempel på når det fungerer
    const password = passwordInput.value; //gjort for at give eksempel på når det fungerer
    let storedUser = JSON.parse(localStorage.getItem("UsersList")); //skal jeg bruge JSON.parse her for at tage localstorage data og gøre det læseligt for javascript igen?

for (i = 0; i < userArray.lenght; i++) { //userarray = JSON fil
    if (username === storedUser[i].username && password === storedUser[i].password) { //se overstående kommentering
    alert("You have successfully logged in.");
        window.location.href = '/profile';
    } else {
        loginErrorMsg.style.opacity = 1;

    }
}
})

