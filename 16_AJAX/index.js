const express = require('express');
const {data, createId} = require('./db');
const bodyParser = require('body-parser');
const app = express();

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index', {numberOfMessages: data.length});
})
app.route('/messages')
    .get((req, res)=>{
        res.render('messages', {arrayOfMessages: data});
    })
    .post((req, res)=>{
        const newMessageData = { id: createId(), title: req.body.title, content: req.body.content };
        data.push(newMessageData);
        res.send(newMessageData);
    });

app.get('/messages/:id', (req, res)=>{
    const message = data.find((el)=>el.id === +req.params.id);
    res.send(message);
});

app.listen(3000);