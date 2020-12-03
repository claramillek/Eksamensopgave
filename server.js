/*Jeg laver et HTTP interface, hvor jeg bruger Node.js require metoden. Ved brug af Node.js' HTTP kan jeg lave en HTTP server der
lytter til serverporte og muliggøre kommunikation til klienten.*/

const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer(function(req, res){

    if(req.url === "/"){ //min login-side er forsiden på min server
        fs.readFile("./public/login.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"}); //typen er tekst og HTML, da det er en html-fil jeg "læser"
            res.end(html);
        });

      }else if(req.url === "/register"){ //opretter en side for min register-page
        fs.readFile("./public/register.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });

      }else if (req.url === "/profile"){ //opretter en side for min register-page
          fs.readFile("./public/profile.html", "UTF-8", function(err, html){
              res.writeHead(200, {"Content-Type": "text/html"});
              res.end(html);
          });

    }else if(req.url.match("\.css$")){ /*Her definerer jeg i en 'else if'- statement, at hvis den requestet url indeholder 
    informationer fra en css fil, så skal den hente informationerne fra css filen der ligger i 'public' mappen*/
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url.match("\.jpeg$")){ /*Her definerer jeg i en 'else if'- statement, at hvis den requestet url indeholder 
    informationer fra en jpeg fil, så skal den hente informationerne fra css filen der ligger i 'public' mappen*/
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpeg"});
        fileStream.pipe(res);

   }else if(req.url.match("\.js$")){ /*Her definerer jeg i en 'else if'- statement, at hvis den requestet url indeholder 
      informationer fra en css fil, så skal den hente informationerne fra css filen der ligger i 'public' mappen*/
        var scriptPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(scriptPath,"UTF-8");
        res.writeHead(200, {"Content-Type": "text/javascript"});
        fileStream.pipe(res);

    }else{ //dette gøres for at der skrives en fejlbesked, hvis en bruger kommer ind på en side der ikke findes
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("No Page Found");
}
}) .listen(3400);


