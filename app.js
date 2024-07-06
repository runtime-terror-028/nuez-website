const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PUBLIC = "public"

app.use(bodyParser.urlencoded({ extended: false }));

const pageRoute = require('./src/routes/page-routes');
const api = require('./src/api/mainAPI');


// Serve static files (including CSS) from the public directory
app.use(express.static(PUBLIC));

app.use('/', pageRoute);
app.use('/api', api);




const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});