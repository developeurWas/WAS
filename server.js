var http = require('http');//fonction http de nodejs
var express = require('express');
var app = require('express')();
var bdd = require('./Script/database.js');//script gérant la base de données

var test = require('./Script/test.js');

httpServer = http.createServer(app);


//remap les dossiers nécessaires d'accès depuis le front
app.use('/Angular', express.static(__dirname + '/Angular'));
app.use('/Controllers', express.static(__dirname + '/Controllers'));
app.use('/ct', express.static(__dirname + '/Views'));
app.use('/Styles', express.static(__dirname + '/Views/Styles'));
app.use('/fonts', express.static(__dirname + '/Views/Styles/fonts'));
app.use('/img', express.static(__dirname + '/images'));


//remap de pages particulières
app.get('/', function (req, res) {
 res.sendfile(__dirname + '/Views/index.html');
});


//allumage du serveur
httpServer.listen(1111);


//initialisation des sockets
var io = require('socket.io').listen(httpServer);



io.sockets.on('connection', function (socket, pseudo) {
  socket.on('project', function() {
    var pi = test.projet();
    for (let i = 0; i < pi.length; i++) {
      socket.emit('projects', pi[i]);
    }
    /*for (var p in pi) {
      console.log(p);
      socket.emit('projects', p);
    }*/
  });
});
