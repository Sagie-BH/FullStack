const express = require('express');
const bcrypt = require('bcryptjs');
const fs = require('fs');

const userRouter = express.Router();

userRouter.post('/register',(req, res) => {
    const { loginObj } = req.body;
    const {userName, password, email } = loginObj;
    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = {
        id: Date.now().toString(),
        userName,
        hashPassword,
        email
    }

    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    users.push(newUser);

    fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8');

    res.json({ message: 'User registered successfully!', userId: newUser.id });
});


userRouter.post('/login',(req, res) => {
    const { loginObj } = req.body;
    const { password, email } = loginObj;
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    const user = users.find(u => u.email === email);

    if(user && bcrypt.compareSync(password, user.hashPassword)){
        res.status(200).json({userId: user.id, message: 'Login successfully'});
    } else {
        res.status(401).json({error: 'Invalid user name or password'});
    }
});

module.exports = userRouter;