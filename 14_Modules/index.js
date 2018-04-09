import express from 'express';
import bodyParser from 'body-parser';
import {Comment} from './src/Comment';
import AdComment from './src/AdComment';
import UserComment from './src/UserComment';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const comment = new Comment(0, 'Автор', 'Текст комментария');
const adComment = new AdComment(1, 'Компания', 'Контент', 'Ссылка');
const userComment = new UserComment(2, 'Пользователь', 'Текст пользователя', new Date());

app.get('/', (req, res)=>{
    res.send(`<p>
      ${comment.render()}</br>
      ${userComment.render()}</br>
      ${adComment.render()}</br>
      </p>`);
})

app.listen(3000);
