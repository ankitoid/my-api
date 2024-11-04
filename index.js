const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./model/Users')
const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect('mongodb://localhost:27017/learning')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err))

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ message: err.message }))
})

app.post('/addUser', (req, res) => {
    const { name, email, phone } = req.body; // Extract data from request body
    const newUser = new UserModel({ name, email, phone });
    
    newUser.save()
      .then(() => res.status(201).json({ message: 'User added successfully' }))
      .catch((err) => res.status(500).json({ message: err.message }));
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
})
