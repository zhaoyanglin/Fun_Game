const express = require('express');
const pool = require('../module/pool');
const router = express.Router();
const createHash = require('hash-generator');
const hashLength = 16;

router.get('/', (req, res) => {

if(req.session.roomId) {
    res.send({foundRoom:true})  
}else {
    res.send({foundRoom:false})
}
});

router.post('/', (req, res) => {
    console.log('this is the session', req.session);

    let hash = createHash(hashLength);
    req.session.roomId = hash
    const queryText = 'INSERT INTO "room" (room_number) VALUES ($1);'

    const queryItem = [hash]


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