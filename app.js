//imports 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const serviceRoutes = require('./routes/service');


//app express

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1",serviceRoutes);

//
const port = 8000;

// listen port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
