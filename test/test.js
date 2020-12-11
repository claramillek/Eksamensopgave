//forsøg på mocha testing:
var server = require("../server") //require serveren, så jeg kan teste login funktionaliteten
var expect = require("chai").expect;
var login = require ("../public/controller/login")

    describe("test of login functionality when user is stored in localstorage", function(){  
        it('should return user has been logged in', function () {
            // Arrange
            let username = usernameInput.value;
            let password = passwordInput.value; 
            let storedUser = JSON.parse(localStorage.getItem("UsersList"));

            // Act
             var result1 = (username === storedUser[0].username && password === storedUser[0].password) 
             var result2 = (username=== "clara" && password === "mille") //eksempel på hvad der lige nu er gemt i min localstorage

             // Assert
             expect(result1).to.be.equal(result1);

           })
        });
