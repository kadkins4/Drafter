// const express = require('express')
// const app = express()

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());

// const port = process.env.PORT || 3000

const apiActions = require('../src/data/dataFnc')

// // app.route(`/api/heroes`).get(new apiActions().getAllHeroes)
// // app.route(`/api/heroes/:id`).get(new apiActions().getHeroById)

// app.listen(port, () => {
//   console.log(`listening on port ${port}`)
// })

// const router = express.Router()

// router.get('/api', function(req, res) {
//   res.json({ message: 'hooray! welcome to our api!' })
// })

// // router.get('/api/heroes', function(req, res) {
// //   res.json(new apiActions().getAllHeroes)
// // })

// app.use('/api', router)
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.route(`/api/heroes`).get(new apiActions().getAllHeroes)


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);