const express = require('express');
const pool = require('../module/pool');

const router = express.Router();

router.get('/', (req, res) => {

    // console.log('this is player route router.get testing req.seesion:', req.session);
    
    const queryText = `SELECT * FROM "player" JOIN "room" ON "player".player_room = "room".room_number
WHERE "room".room_number = $1;`

    const queryItem = [req.session.roomId]

    pool.query(queryText, queryItem)
    .then(results => {
        res.send(results.rows)
    })
    .catch(error => {
        console.log('this is a error from router.get for players', error);
        res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
    // console.log('this is the session', req.session);

    const queryText = 'INSERT INTO "player" (name, player_room) VALUES ($1, $2);'
// console.log('this is the req.body in the player route', req.body.player);

    const queryItem = [req.body.player, req.session.roomId]

    pool.query(queryText, queryItem)
        .then(() => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('INSERT INTO "room" error', error);
            res.sendStatus(500)
        })
})

module.exports = router;
