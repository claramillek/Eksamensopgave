class User{
    constructor(firstname, lastname, age, gender, interests, image, email, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.image = image;
        this.email = email;
        this.password = password;

    }
};

module.exports = {
    User : User,
}