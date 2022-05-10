const express = require('express');
const app = express();
const { sequelize, Userinfo } = require('./models')
const bodyParser = require('body-parser');
const es6Renderer = require('express-es6-template-engine');

//app.use('/', require('./routes/endpoints'));
const winston = require('winston');

const moment = require('moment');

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



app.get('/Userinfo', async (req, res) => {
    try{
    let Userinfos = await Userinfo.findAll();

   console.log(Userinfos);
    res.json(Userinfo);    
    } catch(error){
        console.log(error)
        return res.status(500).json({ error: "Something went wrong" })
    }

})

app.post('/Userinfo', async (req, res) => {
    let createdUser = await Userinfo.create(
        { firstname, lastname, city, country, emial, username, password } = req.body
    )
    res.statusCode = 200;
    res.send(createdUser);
});



app.listen(6500, async ()=> {
    console.log('Server is running on port 6500')
    await sequelize.authenticate()
    console.log("Database Connected!!")
    //await sequelize.sync()
})