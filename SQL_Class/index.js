const {faker} = require ('@faker-js/faker');
//const mySQL = require('mysql2');
// const connection = mySQL.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test',
//     password: 'Abhijit@2004' 
// });

let getRandomUser = () => {
return {
    id: faker.string.uuid(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
};
};
console.log(getRandomUser());

  