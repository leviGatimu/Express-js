import express from 'express';

const router = express.Router();

//All routes here start from /users , before it was /users/users
router.use('/', (req, res) => {
    res.send("Hello from users page");
});

export default express;