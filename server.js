const express = require('express');
const app = express();
const packageJson = require('./package.json');

app.get('/package', (req, res) => {
    res.json(packageJson);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});