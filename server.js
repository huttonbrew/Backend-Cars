const express = require('express');
const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
const { userInfo, userCarInfo, listOfEvs, Sequelize } = require('./models')
const bodyParser = require('body-parser');
const es6Renderer = require('express-es6-template-engine');
const sequelize = new Sequelize('postgres://victorbrew@localhost:5432/cars_db')
const apple = require("./models");
=======
const { Sequelize, userInfo, listOfEvs, userCarInfo } = require('sequelize')
const bodyParser = require('body-parser');
const es6Renderer = require('express-es6-template-engine');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/cars_db')

>>>>>>> 3470e56d2a3c80699355d0bd98d87d3ab3a92fba
=======
const { sequelize, userInfo, userCarInfo, listOfEvs } = require('./models');
const bodyParser = require('body-parser');
const es6Renderer = require('express-es6-template-engine');
//const sequelize = new Sequelize ("postgres://luna@localhost:5432/postgres");
>>>>>>> 48e87e38cb8d451d277e5b458441d42d485c8803

console.log(userCarInfo);
//app.use('/', require('./routes/endpoints'));
const winston = require('winston');

const moment = require('moment');
const listofEVs = require('./models/listofEVs').listOfEvs;
const usercarinfo = require('./models/usercarinfo');
const userinfo = require('./models/userinfo');
const { cmyk } = require('color');
//const userinfo = require('./models/userinfo');



const pg = require('pg-promise')();
console.log(apple.listOfEvs);
//To convert the request to readable json format, we use bodyparser package
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express())

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'pokedex' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ]
})


// Middleware is the mediary that modifies information sent between the client and server
app.all('*', (req, res, next) => {
    logger.info({
        "Action": req.method,
        "Path": req.path,
        "Content_Type": req.header('Content-Type'),
        "Body": req.body,
        "Time": moment().format('MM/DD/YYYY, h:mm:ss a')
    })
    next()
})


async function main(){
    await sequelize.sync({force: false})
}
main()



//*** GET REQUESTS SHOULD NEVER CONTAIN A BODY */



<<<<<<< HEAD
app.get('/listOfEvs', async (req, res) => {
    try{
    let evsList = await listOfEvs.findAll();

   //console.log(Userinfos);
    res.json(evsList);    
    } catch(error){
        console.log(error)
        return res.status(500).json({ error: "Something went wrong" })
    }
=======
app.get('/userInfo', async (req, res) => {
    //try{
    let Userinfos = await userInfo.findAll();
>>>>>>> 48e87e38cb8d451d277e5b458441d42d485c8803

   res.send(Userinfos);
    // res.json(Userinfo);    
    // } catch(error){
    //     console.log(error)
    //     return res.status(500).json({ error: "Something went wrong" })
    //}
})

<<<<<<< HEAD

app.post('/listOfEvs', async (req, res) => {
    let listOfEvs  = await ListofEVs.update(
        { brand, model, year, range_mi, range_km, kWh_100mi, kWh_100km } = req.body
    )
=======
app.get('/EV/:model', async (req, res) => {
    let car = await listOfEvs.findOne ({
        where: {
            model: req.params.model
        }
    })
    if (car == null) {
        res.statusCode = 400;
        res.send('Not found');
    } else {
        res.statusCode = 200;
        res.send(car);
    }
})

//inner joing
// app.get('/EV/:model', async (req, res) => {
//     let mainData = await userInfo.findAll({
//         attributes: [firstName, lastName],
//         include: {
//             model: userCarInfo,
//             as: 'carInfo'
//           }
//     })
// })

//pg promise
// app.get('/EV/:model', async (req, res) => {
//     await db.oneOrNone(
//         'SELECT userInfo.firstName, userInfo.lastName, userInfo.username, userCarInfo.brand, userCarInfo.model, userCarInfo.year, userCarInfo.mileage, userCarInfo.range_mi, userCarInfo.range_km, userCarInfo.kWh_100mi, userCarInfo.kWh_100km,
//         FROM'
//     )
// }

app.post('/userInfo', async (req, res) => {
    console.log("hi")
    let createdUser = await userInfo.create({
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        city: req.body.city, 
        country: req.body.country, 
        email: req.body.email, 
        username: req.body.username, 
        password: req.body.password 
    })
>>>>>>> 48e87e38cb8d451d277e5b458441d42d485c8803
    res.statusCode = 200;
    res.send(listOfEvs);
});

app.post('/userCarInfo', async (req, res) => {
    createdUser = await userCarInfo.create(
        { username, brand, model, year, mileage, range_mi, range_km, kWh_100mi, kWh_100km } = req.body
    )
    let newUserInfo = await userCarInfo.findOne ({
        where: {
            username: req.body.username
        }
    })
    if (newUserInfo == null) {
        res.statusCode = 400;
        res.send('Unsuccessful');
    } else {
        res.statusCode = 200;
        res.send(newUserInfo);
    }
});

app.delete('/userInfo/:id', async (req, res) => {
    let deleteUser =  await userInfo.findOne ({
        where: {
            id: req.params.id
        }
    })

    if (deleteUser == null) {
        res.send (`${req.params.id} is not a valid id`)
    } else {
   await userInfo.destroy({
        where: {
            id: req.params.id
        }
    })
    res.sendStatus(200, deleteUser);
    }
})

// app.put('/userinfo', async (req, res) => {
//     let userinfo = await userinfo.create(req.body);
//   res.json(userinfo);

// res.statusCode = 200;
//     res.send(listOfEvs)

// };




app.listen(5900, async ()=> {
    console.log('Server is running on port 6500')
    // await sequelize.authenticate()
    // console.log("Database Connected!!")
    //await sequelize.sync()
})