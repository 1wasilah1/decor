const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8700;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Decor Backend API is running!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});