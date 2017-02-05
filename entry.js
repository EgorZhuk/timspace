
require('./src/css/spaceship.css');
require('./src/css/terminal.css');
$ = require('jquery');
require('./src/js/terminal.js');

var spaceContent = require('./src/html/spaceship.html');
var termContent = require('./src/html/terminal.html');
var doc = $(document);
var body = $(document.body);
doc.attr('title', "To infinity & beyond!");


body.append(spaceContent);
body.append(termContent);

$(".terminal").typewriter();