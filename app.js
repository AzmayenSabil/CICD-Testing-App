const express = require('express');
const cors = require('cors');
const add = require('./calculator'); // Import the add function from calculate.js
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;
  const result = add(parseFloat(num1), parseFloat(num2)); // Use the add function
  res.send({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
