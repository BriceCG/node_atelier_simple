// Appel de la librairie express
let express = require('express');

//Appel de la librairie body parser
let bodyParser = require('body-parser');

//Creation serveur node
const app = express()

let users = [{
    'username': 'admin',
    'password': 'admin'
},{
    'username': 'brice',
    'password': 'brice'
}]


//Configuration de la librairie body parser
app.use(bodyParser.json())

app.get('/users',(req,res)=>{
    return res.json(users)
})

app.post('/login',(req,res)=>{
    const login = req.body
    let result = users.find(user=> user.username == login.username && user.password == login.password)
    if (result){
        return res.json({'message': 'Login success'})
    }
    else{
        return res.json({'message': 'Login Failure'})
    }
})


//Configuration PORT et Hote
app.listen(3000,'localhost',()=>{
    console.log('serveur connecte')
})