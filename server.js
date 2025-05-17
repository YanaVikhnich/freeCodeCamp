const express = require('express');
const app = express();
const packageJson = require('./package.json'); // <-- імпортуємо напряму

app.get('/package.json', (req, res) => {
  res.json(packageJson); // <-- повертаємо JSON
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
