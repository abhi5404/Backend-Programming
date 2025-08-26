const {faker} = require ('@faker-js/faker');
const mySQL = require('mysql2');
const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Abhijit@2004' 
});

let q= "SHOW TABLES";

try {
    connection.query(q, (err, results) => {
        if (err) throw err;
        console.log(results);
        console.log(results.length);
        console.log(results[0]);
        console.log(results[1]['Tables_in_delta_app']);
    });
} catch (error) {
    console.error("Error connecting to the database:", error);
}

connection.end();

let getRandomUser = () => {
return {
    id: faker.string.uuid(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
};
};
// console.log(getRandomUser());

// sql from terminal command is : (base) PS C:\Program Files\MySQL\MySQL Server 8.0\bin> .\mysql.exe -u root -p