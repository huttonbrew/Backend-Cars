const express = require('express');
const app = express();
const { sequelize, userInfo, userCarInfo, listOfEvs } = require('./models');
const bodyParser = require('body-parser');
const es6Renderer = require('express-es6-template-engine');

//To convert the request to readable json format, we use bodyparser package
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/login', async function (req, res){
    email = req.body.email

    if (email == null || req.body.password == null) { // security risk to store pass in variable?
        res.status(400).send('please fill in all fields')
    } else {
        let user = await userInfo.findOne({
            where: {
                email: email
            }
        })
        if(user == null) {
            res.status(404).send('user not found')
        } else {
            let isValid = await bcrypt.compare(req.body.password, user.password)
            if(isValid == true) {
                res.status(200).send('login successful')
            } else {
                res.status(401).send('invalid credentials')
            }
        }
    }
});