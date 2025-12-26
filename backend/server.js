const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contact'));

// Test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Connect DB
connectDB();

// ✅ حل المشكلة هنا
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
