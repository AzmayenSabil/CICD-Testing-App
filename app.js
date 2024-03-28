const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors()); // Use cors middleware to allow cross-origin requests

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;
  let result;
  console.log(req.body);

  result = parseFloat(num1) + parseFloat(num2);

  res.send({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
