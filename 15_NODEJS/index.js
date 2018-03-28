let express = require('express');
let data = require('./data');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.get('/', (req, res)=>{
    res.send(`<a href="/messages">Hello, user</a>`);
})
app.get('/messages', (req, res)=>{
    console.log(data.title);
    res.send(`${data.title}`);
});

app.get('/message/:id', (req, res)=>{

});

app.post('/messages', (req, res)=>{
    res.send();
});

app.listen(3000, ()=>{

});