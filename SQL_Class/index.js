const {faker} = require ('@faker-js/faker');
let createRandomUser = () => {
return {
    userId: faker.string.uuid(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate({min: 18, max: 65, mode: 'age'}),
    registeredAt: faker.date.past(),
};
};
console.log(createRandomUser());

 