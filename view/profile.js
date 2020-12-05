//Heri har jeg metoder/funktioner til at slette brugeren og opdaterer brugeren
const logoutBtn = document.querySelector('#logoutbtn');

function deleteUser() {
    const deleteuser = localStorage.getItem('deleteuser');
}

function logout() {
    logoutBtn.addEventListener('click', function(){
        localStorage.removeItem('createUsersList'); //Her skal vi ikke definere en value den skal fjerne, fordi 'removeItem' kun skal vide hvilken key den skal fjerne fra storage
        alert ("You have been logged out")

    })
    //window.localStorage.clear();
    //window.location.href = "/login"
    //alert ("You have been logged out")
}

//1. UPDATE USER FUNCTION
function updateUser() {
    document.getElementById("update-btn").onclick = updateUser(); {
        window.location.href = "/profile"
    }    
}
//2. LIKE FUNCTION 

function like() {
}

//3. DISLIKE FUNCTION 

function dislike() {
}