const express = require('express');
const app = express();
const path = require('path');

app.get('/package.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'package.json')); // <-- повертаємо JSON
});

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
