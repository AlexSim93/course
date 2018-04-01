let express = require('express');
let {data, createId} = require('./db');
let bodyParser = require('body-parser');
let app = express();

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
        data.push({id: createId(), title: req.body.title, content: req.body.content});
        res.render('messages', {arrayOfMessages: data});
    });

app.get('/messages/:id', (req, res)=>{
    let message = data.find((el)=>el.id === +req.params.id);
    res.render('message', {title: message.title, content: message.content});
});

app.listen(3000);