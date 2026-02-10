import express from 'experss';

const routes = express.Routes();

const users = [
    {
    firstName:"John",
    lastName: "Doe",
    age: 25
    },
     {
    firstName:"Jane",
    lastName: "Doe",
    age: 24
    }
]

routes.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

routes.post('/', (req, res) => {
    const user = req.body;
    res.send(`User succesfully inputed: ${user}`);
    console.log(user);
});

