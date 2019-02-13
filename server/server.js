let express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const app = express();
const restaurantRouter = require('./routes/restaurant.router');
const pool = require('./modules/pool.js')


let PORT = 5000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser({ urlencoded: true }));
app.use('/restaurant', restaurantRouter);


app.listen(PORT, ()=>{
console.log('listening on port:', PORT);
})