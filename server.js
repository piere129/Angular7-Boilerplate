const express = require('express');
const app = express();

const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

const heroes = require('./routes/heroes');
app.use('/api', heroes);


app.listen(8000, () => {
    console.log('Server started!');
});



