var express = require('express');
var newsController = require('./controllers/newsController');

var app = express();

//встановлюємо шаблонізатор EJS
app.set('view engine', 'ejs');

//директорія, де знаходятся статичні файли (зображення, стилі)
app.use(express.static('./public'));

//викликаємо контроллер
newsController(app);

//встановлюємо сервер
app.listen(3000);
//додаткова інформація для розробника (на випадок успішного завантаження серверу)
console.log('You are listening to port 3000');
