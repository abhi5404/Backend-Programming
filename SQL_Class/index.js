const {faker} = require ('@faker-js/faker');
const mySQL = require('mysql2');
const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Abhijit@2004' 
});

try {
    connection.query("SHOW TABLES", (err, results) => {
        if (err) throw err;
        console.log(results);
    });
} catch (error) {
    console.error("Error connecting to the database:", error);
}


let getRandomUser = () => {
return {
    id: faker.string.uuid(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
};
};
console.log(getRandomUser());

  