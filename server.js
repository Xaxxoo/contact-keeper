const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const contactsRoute = require('./routes/contact');

app.get('/', (req, res) => res.json({ msg: 'weclcome to a new node app' }));

//Define routes
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/contact', contactsRoute);

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
