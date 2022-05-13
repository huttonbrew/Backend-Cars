const express = require('express');
const app = express();
const { Sequelize, userInfo, listOfEvs, userCarInfo } = require('sequelize')
const bodyParser = require('body-parser');
const es6Renderer = require('express-es6-template-engine');
const sequelize = new Sequelize('postgres://victorbrew@localhost:5432/cars_db')


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
    await sequelize.sync({force: true})
}
main()



//*** GET REQUESTS SHOULD NEVER CONTAIN A BODY */



app.get('/listOfEvs', async (req, res) => {
    try{
    let evsList = await listOfEvs.findAll();

   //console.log(Userinfos);
    res.json(evsList);    
    } catch(error){
        console.log(error)
        return res.status(500).json({ error: "Something went wrong" })
    }

})


// app.post('/listOfEvs', async (req, res) => {
//     let listOfEvs  = await ListofEVs.update(
//         { brand, model, year, range_mi, range_km, kWh_100mi, kWh_100km } = req.body
//     )
//     res.statusCode = 200;
//     res.send(listOfEvs);
// });


// app.put('/userinfo', async (req, res) => {
//     let userinfo = await userinfo.create(req.body);
//   res.json(userinfo);

// res.statusCode = 200;
//     res.send(listOfEvs)

// };



app.listen(6500, async ()=> {
    console.log('Server is running on port 6500')
})