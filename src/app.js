const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
//const paymentRoutes = require('./routes/payments')

const app = express();

// Middlewre
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
//app.use('/api/payments', pay);\


