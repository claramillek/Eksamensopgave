/*const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const birthdayInput = document.getElementById('birthday');
const genderInput = document.getElementById('gender');
const interestInput = document.getElementById('interest');

const updateUserBtn = document.getElementById('updateUser');

const updateUser = function(ev){ //ev = event
    ev.preventDefault(); //her overvrider vi submitknappens default funktion, hvilket mulliggøre, at vi nu kan bestemme dens funktionalitet. Fortæller browseren, at den ikke skal submitte formen med det samme.
    let updatedUser = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        email: emailInput.value,
        username: usernameInput.value,
        password: passwordInput.value,
        birthday: birthdayInput.value,
        gender: genderInput.value,
        interest: interestInput.value
    }
    console.warn('added', JSON.stringify(updatedUser));

    //gemmer til localestorage:
    localStorage.setItem('updatedUsersList', JSON.stringify(updatedUser));
}

document.addEventListener('DOMContentLoaded', function(){
    updateUserBtn.addEventListener('click', updateUser);  
});*/