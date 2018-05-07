var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set static path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/images',express.static(path.join(__dirname, 'public/RCC/images')));
app.use('/script',express.static(path.join(__dirname, 'public/RCC/script')));
app.use('/style',express.static(path.join(__dirname, 'public/RCC/style')));

app.get('/', function(req, res){
    res.render('rccHome');
});

app.get('/rcc', function(req, res){
    res.render('rccHome');
})

app.get('/rcc/residentialSchedule', function(req, res){
    res.render('residentialSchedule');
})
var PORT = 80
app.listen(PORT, function(){
    console.log('server listening on Port ' + PORT);
})