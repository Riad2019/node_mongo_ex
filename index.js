var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')


const app = express()
app.use(cors())
app.use(bodyParser.json())

const users=["asad","moin","sabed","rashed","sabana"];

app.get('/',(req,res) => {
    
    const fruit = {
        product :'mango',
        price : 220
    }


    res.send(fruit);
});
app.get('/fruit/banana',(req,res) => {
    res.send({product: 'kola' ,quantity: 100 ,price :1000 })
})

app.get('/users/:id',(req,res) => {
    console.log(req.params)
    const id = req.params.id;
     console.log(req.query.sort);
    const name =users[id];
     res.send({id,name});


})
//post
app.post('/addUser',(req,res) => {
    //save to data
const user =req.body;
user.id=55;
res.send(user);
})

app.listen(3000, ()=> console.log('listening to log 3000'))