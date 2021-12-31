var express = require('express');
const fs = require("fs");
const res = require('express/lib/response');

var app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/files_js"));
app.use(express.static(__dirname + "/html_files"));
app.use(express.static(__dirname + "/resourses"));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/savejson", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
    fs.writeFile('file.json', JSON.stringify(request.body), err => {
        if(err){
            console.log(err);
            return response.sendStatus(500);
        } else{
            console.log('File written');
        }
    });
    response.json(request.body);
});

app.post("/readjson", jsonParser, function (request, response) {
    fs.readFile('file.json', 'utf-8', (err, jsonString)=>{
        if(err){
            console.log(err);
            return response.sendStatus(500);
        } else{
            console.log('File readed');
            ToSend = jsonString;
            console.log(JSON.parse(jsonString));
            response.setHeader('Content-Type', 'application/json');
            response.end(jsonString);
        };
    });
});

app.listen(3000);
