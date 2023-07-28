const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')

//Middleware
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//Routes
app.use(require('./routes/routes'));

//Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
});