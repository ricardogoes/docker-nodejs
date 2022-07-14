const express = require('express')
const mysql = require('mysql')
var List = require("collections/list");

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Ricardo Duque Goes')`
connection.query(sql)

var html = '<h1>Full Cycle Rocks!</h1>'
html += '<ul>'
connection.query("SELECT * FROM people", function (err, result, fields){
    console.log(result[0])
    for(var i = 0; i <= result.length - 1; i++)
    {        
        html += '<li>'+result[i].id + ' - ' + result[i].name+'</li>'
    }
})
html += '</ul>'
connection.end()

app.get('/', (req,res) => {
    res.send(html)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
    //console.log(result.length)
})