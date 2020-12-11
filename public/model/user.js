class User{
    constructor(firstname, lastname, email, username, password, birthday, gender, interests, like, matches){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.birthday = birthday;
        this.gender = gender;
        this.interests = interests;
        this.like = like;
        this.matches = matches;
    }
};

module.exports = User