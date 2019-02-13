const express = require('express');
const restaurantRouter = express.Router();
const pool = require('../modules/pool');
restaurantRouter.get('/', (req, res) => {
    console.log('GET route was hit');
    pool.query('SELECT * FROM "restraunts"')
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('error with books select', error);
            res.sendStatus(500);
        });//end .catch
});//end .get

restaurantRouter.post('/', (req, res) => {
    let newFood = req.body;
    console.log('new food is:', newFood);
    pool.query(`INSERT INTO "restraunts"("name", "type") VALUES($1, $2);`,
        [newFood.name, newFood.type]).then(() => {
            res.sendStatus(201);
        });//end .post
});

restaurantRouter.delete('/:id', (req, res) => {
    console.log('in delete request');
    console.log('req.params', req.params);
    
    pool.query(`DELETE FROM "restraunts" WHERE "id"=$1`, [req.params.id]
    ).then( ()=>{
        res.sendStatus(204);
    }).catch( error => {
        res.sendStatus(500);
    });
})

module.exports = restaurantRouter;