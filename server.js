const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/package', (req, res) => {
    const packagePath = path.join(__dirname, 'package.json');
    fs.readFile(packagePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading package.json');
        res.type('application/json').send(data);
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});