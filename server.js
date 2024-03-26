const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');


app.use(cors());


// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Config endpoint
app.get('/config', (req, res) => {
  res.json({ REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL });
});

// Redirect all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

