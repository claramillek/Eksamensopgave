class User{
    constructor(firstname, lastname, email, username, password, age, gender, interests){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
};

module.exports = User