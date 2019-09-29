var express = require('express');
const port = process.env.port || 4444;
const path = require('path');
var bp = require('body-parser');
var cors = require('cors');
var pp = require('passport');
var mong = require('mongoose');
const DB = require('./model/DBConfig');
var app = express();

// mong.connect(DB.url);
// mong.connection.on('connected', function() {
//     console.log("Connect to MongoDB at: " + DB.url);
// });

//Connect to DataBase
mong.connect(DB.url, {
    useMongoClient: true,
}, function(err) { //CallBack message on connection
    if(err) throw err
    console.log("Connected to database: " + DB.db + "...");
});

//Checking for DataBase Errors
mong.connection.on('error', function(err) {
    console.log("Database Error: " + err);
});

var users = require('./routes/Users');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); //initialize cors
app.use(bp.json()); //initialize body-parser
app.use(pp.initialize()); //Passport Middleware
app.use(pp.session()); //Passport Middleware
require('./model/TokenConfig')(pp);
app.use('/users', users);

app.get('/', (req, res) => {
    res.send("Ntn nuh deh yah!!!");
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});


app.listen(port, function() {
    console.log("Server is connected and listening to port: " + port);
});