const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { nextTick } = require('process');

const port = 3000;

app.use('/',
    express.static(
        __dirname+'/public')
)

app.get('/index', (req, res)=>{
    res.sendFile("index.html", {root: __dirname})});

app.get('/', (req, res)=>{
    res.sendFile("index.html", {root: __dirname})});

app.get('/destinasi', (req,res)=>{
    res.sendFile("destinasi.html", {root: __dirname})
})

app.get('/history', (req,res)=>{
    res.sendFile("history.html", {root: __dirname})
})

app.get('/about', (req,res)=>{
    res.sendFile("about.html", {root: __dirname})
})
app.use((req,res) => {
    res.status(404)
    res.send("<h1>Error: File not found</h1>");
});



app.listen(port, ()=>{
    console.log(`App Listening to http://localhost:${port}...` );
})