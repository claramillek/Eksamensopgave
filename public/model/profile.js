//Heri har jeg metoder/funktioner til at slette brugeren og opdaterer brugeren

function deleteUser() {
    const deleteuser = localStorage.getItem('deleteuser');
}

function logout() {
    //window.localStorage.clear();
    window.location.href = "/"
    alert ("Du er nu logget ud")
}

//1. UPDATE USER FUNCTION
function updateUser() {
    document.getElementById("update-btn").onclick = updateUser(); {
        window.location.href = "/profile"
    }    
}
//2. LIKE FUNCTION 

function like() {
    window.location.reload();
}

//3. DISLIKE FUNCTION 

function dislike() {
}