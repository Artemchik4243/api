const API = require('./server');
const api = new API();
api.start(3000);



const faker = require('faker');
api.server.post('/users', (req, res) => {
    const { name, email } = req.body;
    const user = {
        id: faker.random.uuid(),
        name: name || faker.name.findName(),
        email: email || faker.internet.email(),
    };
    api.router.db.data.users.push(user);
    res.json(user);
});

const axios = require('axios');
axios.post('http://localhost:3000/users', {
    name: 'Jane Smithh',
    email: 'anesmith@example.com',
})
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });

