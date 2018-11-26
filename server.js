const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

let db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

require('./sockets/todo-sockets')(io);

//routes
//////////////////////api///////////////////////////

require('./routes/api_routes.js')(app);

//////////////////////////////
db.sequelize.sync({ force: false }).then(function () {
    server.listen(PORT, function () {
        console.log(`App is now listening on PORT ${PORT}`)
    });
});



