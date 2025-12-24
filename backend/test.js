const express = require('express');
const path = require('path');

const app = express();

// serve images
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
