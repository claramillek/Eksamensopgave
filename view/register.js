const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const birthday = document.querySelector('#birthday');
//const gender = document.querySelector('#gender');
//const interest = document.querySelector('#interest');
const registerBtn = document.querySelector("#createUser");
const createErrorMsg = document.querySelector("#create-user-msg");



registerBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let firstname = firstnameInput.value
    let lastname = lastnameInput.value
    let email = emailInput.value
    let username = usernameInput.value; //gjort for at give eksempel på når det fungerer
    let password = passwordInput.value; //gjort for at give eksempel på når det fungerer
    let birthday = birthdayInput.value

    let storedRegUser = JSON.parse(localStorage.getItem("createUsersList")); 

    //const gender = genderInput.value
    //const interest = interest.value
    if (firstname === storedRegUser[0].firstname && lastname === storedRegUser[0].lastname && email === storedRegUser[0].email && username === storedRegUser[0].username && password === storedRegUser[0].password && birthday === storedRegUser[0].birthday) { //se overstående kommentering
        alert("You are now registered and ready to use Match!");
        window.location.href = '/profile';
        } else {
        createErrorMsg.style.opacity = 1;
        }
    })