let express = require('express');
let bodyParser = require('body-parser');
let {Comment} = require('./src/Comment');
let {AdComment} = require('./src/AdComment');
let {UserComment} = require('./src/UserComment');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let comment = new Comment(0, 'Автор', 'Текст комментария');
let adComment = new AdComment(1, 'Компания', 'Контент', 'Ссылка');
let userComment = new UserComment(2, 'Пользователь', 'Текст пользователя', new Date());

app.get('/', (req, res)=>{
    res.send(`<p>
      ${comment.render()}</br>
      ${userComment.render()}</br>
      ${adComment.render()}</br>
      </p>`);
})

app.listen(3000);