$(document).ready(function(){

  $('form').on('submit', function(){
//в item записуємо значення, отримане з інпуту
      var item = $('form input');
      var articles = {item: item.val()};
//виконуємо ajax запит з використанням jQuery
//відкриваємо з'єднання із сервером методом POST, по поточному url
      $.ajax({
        type: 'POST',
        url: '/',
//аналогічно запиту на чистому js: send(articles)
        data: articles,
//при успішному доданні об'єкту (status=200 та readystatechange=4) до масиву
// перезавантажуємо розділ із новинами
        success: function(data){
          location.reload();
        }
      });

      return false;

  });

//аналогічні дії проводяться при видаленні об'єкта з масиву
  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          location.reload();
        }
      });
  });

});
