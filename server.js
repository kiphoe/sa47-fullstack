//middleware
//
const express = require ('express');

var app = express();

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.get('/users', (req,res)=>{
    let users = [
        {name: 'ken', age: 20},
        {name: 'Peter', age: 20},
        {name: 'Alex', age: 20},
    ]
    res.json(users);
})

app.get('/group', (req,res)=>{
    res.status.json({errorMessage:'invalid request'});
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})