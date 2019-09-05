const express = require('express');
const router = express.Router();
const arrayOfRules = require('../module/Rules');

router.get('/', (req, res) => {

    let pickedRule = arrayOfRules[Math.floor(arrayOfRules.length * Math.random())]
    console.log('this is the picked rule:', pickedRule);

    try{
        res.send(pickedRule)
    }
    catch(error){
        console.log('this is the router error for rules:', error);
        res.sendStatus(500)
    }

})

module.exports = router;
