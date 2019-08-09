const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')

const roomRoute = require("./routes/room.route");

const TWO_HOURS = 1000 * 60 * 60 * 2

const {
    PORT = 5000,
    NODE_ENV = 'development',

    SESS_NAME = 'sid',
    SESS_SECRET = 'my_secret',
    SESS_LIFETIME = TWO_HOURS,
} = process.env

const IN_PROD = NODE_ENV === 'production'

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    name:SESS_NAME,
    resave:false,
    saveUninitialized:false,
    secret:SESS_SECRET,
    cookie:{
        maxAge:SESS_LIFETIME,
        sameSite:true,
        secure: IN_PROD
    }
}))

app.use('/roomInfo', roomRoute);

app.get('/test', (req, res) => {
    console.log('hi');

    res.send({"test": "test"})
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});