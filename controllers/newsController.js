//підключаємо модуль для парсингу
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
//наповнюємо масив новин тестовими значеннями, що будуть передаватися у view
var data = [
  {item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non ligula nec neque aliquam imperdiet. Nam sit amet ultricies orci.'},
  {item: 'Nullam porta, ex a mattis ultrices, odio lectus iaculis dui, nec ultrices arcu turpis id mauris. Sed sed malesuada mi, sit amet ultrices ligula. Nullam tincidunt odio cursus risus commodo sollicitudin. '},
  {item: 'Proin risus justo, scelerisque id lorem id, tincidunt interdum libero. Praesent neque magna, accumsan sit amet pellentesque sit amet, porta non mauris.'}
];

module.exports = function (app) {

//обробка GET запиту
  app.get('/', function (req, res) {
    //до шаблону index передається масив новин
    res.render('index', {articles: data});
  });

//обробка POST запиту
  app.post('/', urlencodedParser, function (req, res) {
    //req.body містить дані у форматі json
    data.push(req.body);
    //res.json відправляє дані на клієнт у форматі JSON використовуючи
    //стандартний метод у js мові, а саме JSON.stringify()
    res.json(data);
  });

//обробка DELETE запиту
  app.delete('/:item', function (req, res) {
    data = data.filter(function(article){
      //якщо результат = true, то об`єкт не видаляється з масиву
      return article.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });

};
