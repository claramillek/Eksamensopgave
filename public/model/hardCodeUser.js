const User = require('./user')
//const interestsArray = require('./hardCodeInterests'); Jeg har ikke lavet funktioner til hverken interest eller match endnu
//const matchArray = require('./hardCodeMatch');

let userArray=[]
let Peter = new User ('Peter', 'Jakobsen', 'p.jakobsen@gmail.com', 'p.jako', 'etPassword432', 30, 'male','female');
let Nicole = new User ('Nicole', 'Soerensen', 'n.s@live.com', 'nicoles', 'nicole31y', 26, 'female','male');
let Steen = new User ('Steen', 'Nielsen', 'steen_nielsen@hotmail.com', 'steen123','f%%ljh', 46,'male', 'female');
let Micheal = new User ('Micheal', 'Karlsson', 'karlssonm@icloud.com', 'm.karl', '1234trew', 23,'male', 'other');
let Stephanie = new User ('Stephanie', 'Mahone', 'steph.mah@hotmail.com', 'steph.fun143', 'hejsa1234', 27,'other', 'other');
let Ingelise = new User ('Ingelise', 'Lindberg', 'ingelise.l.g@gmail.com','i.lise','qwnvmfkrj12y7', 67, 'female', 'male')
let Bent = new User ('Bent', 'Hojborg', 'bent@live.com','bentH','passwordformatch12', 75,'male', 'female')
let Kristian = new User ('Kristian', 'Hilde', 'kris.hilde@gmail.com','kristianh','paformatch', 31, 'male', 'other')
let Christiane= new User ('Christiane', 'Lidenholt', 'christiane.l@icloud.com','christianelidenholdt','1a2b3c', 25, 'female', 'male')
let Anna = new User ('Anna', 'Berg', 'AnnaB@hotmail.com','AnnaB','secret123', 21, 'female', 'male')

userArray = [Peter,Nicole,Steen,Micheal,Stephanie,Ingelise,Bent,Kristian,Christiane,Anna];

module.exports = userArray

console.log(userArray);

