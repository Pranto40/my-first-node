const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const users = [
    {
        name: 'dulal',
        id: 1,
        email: 'dulal@gmail.com',
    },
    {
        name: 'dulal ahammed',
        id: 2,
        email: 'dulal@gmail.com',
    },
    {
        name: 'dulal parnto',
        id: 3,
        email: 'dulal@gmail.com',
    },
    {
        name: 'dulal',
        id: 4,
        email: 'dulal@gmail.com',
    },
    {
        name: 'dulal',
        id: 5,
        email: 'dulal@gmail.com',
    },
    {
        name: 'dulal',
        id: 6,
        email: 'dulal@gmail.com',
    },
]

app.get('/', (req, res) => {
    res.send('Look mamam! you can code Node now!!');
});

app.get('/users', (req, res) => {
    res.send(users);
});

// data gula client side theke pabo
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})