let express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const app = express();
const pool = require('./modules/pool.js');

let PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser({ urlencoded: true }));

app.get('/food', (req, res) => {
    console.log('GET route was hit');
    pool.query('SELECT * FROM "restraunts"')
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('error with books select', error);
            res.sendStatus(500);
        });//end .catch
});//end .get

app.post('/food', (req, res) => {
    let newFood = req.body;
    console.log('new food is:', newFood);
    pool.query(`INSERT INTO "restraunts"("name", "type") VALUES($1, $2);`,
        [newFood.name, newFood.type]).then(() => {
            res.sendStatus(201);
        });//end .post
});

app.delete('/delete', (req, res) => {
    console.log('in delete');

    pool.query('DELETE FROM "restraunts"("id") VALUE($1);'[req.body.id]).then(() => {
        res.sendStatus(200);
    })
})

app.listen(PORT, () => {
    console.log('listening on port:', PORT);
})