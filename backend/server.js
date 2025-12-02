const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8081;

// Fix Mongoose strictQuery warning
mongoose.set('strictQuery', true);

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => res.send('Backend is working!'));

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/crud_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Cannot connect to MongoDB!', err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
