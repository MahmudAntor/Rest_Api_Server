const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.post((req,res,next) => {
    res.end('Will add the leader: ' + req.body.name + 
        ' With details: '+ req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting all the leaders!');
});

leaderRouter.route('/:leaderId')
.all(function(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'type/plain' });
    next();
})
.get(function(req, res, next) {
    res.end('Will send details of the leader ID: ' + req.params.leaderId + ' to you!');
})
.post((req,res,next) => {
    res.end('Post operation not supported on /leaders/:'+ req.params.leaderId);
})
.put(function(req, res, next) {
    res.write('Updating the leader: '+ req.params.leaderId + '.\n');
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;