Лента комментариев
=====================

В ленте комментариев присутствуют обычные комментарии пользователей и рекламные. У всех комментариев есть автор, текст и метод render() для отображения, комментарии любого типа можно цитировать. 
У обычных комментариев так же есть дата и рейтинг, который можно увеличивать и уменьшать.
Для рекламных комментариев даты и рейтинга нет, но есть ссылка и метод hide(), который позволяет скрыть комментарий.

Для создания такой ленты нужно реализовать объекты вида:

#### Comment 
комментарий, обладающий методом render  
* render() выводит автора и текст комментария и возвращает сгенерированную строку
* quote(userName) выводит комментарий как цитату: сначала имя пользователя, переданное в качестве аргумента, затем автора и текст комментария; возвращает сгенерированную строку

#### UserComment
комментарий пользователя, обладающий рейтингом  
* наследник Comment  
* метод render() кроме текста и автора должен выводить дату и рейтинг  
* метод like() увеличивает рейтинг на 1  
* метод dislike() уменьшает рейтинг на 1  

#### AdComment
рекламный комментарий со ссылкой  
* наследник Comment  
* метод render() кроме текста и автора должен выводить адрес ссылки и текст "Перейти >>"  
* обладает методом hide(), который скрывает комментарий так, что вызов render() после него выведет стандартный текст "Реклама скрыта" вместо самого комменатрия  

Добавьте свою реализацию в файл comments.js и запустите тесты командой npm test.  
Дата выводится в формате dd.mm.yyyy.  
Для вывода в методе render() используем консоль.  

### Примеры использования

#### Любой тип комментария
```js
var comment = new UserComment('Иван', 'Первый комментарий', new Date());
var adComment = new AdComment('Агент', 'Переходите по ссылке', 'www.adtestlink.com');  

comment.quote('Марья');
// результат: 'Марья: "Иван написал: Первый комментарий;"'

adComment.quote('Марья');
// результат: 'Марья: "Агент написал: Переходите по ссылке;"'
```

#### Комментарий пользователя
```js
var comment = new UserComment('Иван', 'Первый комментарий', new Date());
comment.render();  
// результат: 'Иван написал 14.03.2018: Первый комментарий; Рейтинг: 0'  
  
comment.like();  
comment.render();  
// результат: 'Иван написал 14.03.2018: Первый комментарий; Рейтинг: 1'  
```

#### Рекламный комментарий
```js
var adComment = new AdComment('Агент', 'Переходите по ссылке', 'www.adtestlink.com');  
adComment.render();
// результат: 'Агент: Переходите по ссылке; Перейти >> www.adtestlink.com'  

adComment.hide();  
adComment.render();  
// результат: 'Реклама скрыта'  
``` 
