require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const puerto = process.env.PUERTO; 

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/alumno.routes')(app);

app.listen(puerto, () => {
    console.log("Listening at Port " +puerto)
});