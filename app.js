const express = require('express');
const path = require('path');
const app = express();

const PUBLIC = "public"


const pageRoute = require('./src/routes/page-routes');


// Serve static files (including CSS) from the public directory
app.use(express.static('public'));

app.use('/', pageRoute);




const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});