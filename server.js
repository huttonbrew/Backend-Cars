const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const math = require('math');
const { sequelize, user_info, user_car_info, list_of_evs } = require('./models');
const bodyParser = require('body-parser');
const es6Renderer = require('express-es6-template-engine');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3001;
const env = process.env.NODE_ENV || "production";


//const sequelize = new Sequelize ("postgres://luna@localhost:5432/postgres");

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
app.use(methodOverride('_method'))
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });




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


//-----------NON-USER PAGES-------------------------------------


//Get home page
app.get('/', async (req, res) => {
    res.render('index', {})
});

//Get login page
app.get('/login', async (req, res) => {
    res.render('login', {})
});

//Get registration page
app.get('/register', async (req, res) => {
    res.render('register', {})
});

//Get message page
app.get('/message', async (req, res) => {
    res.render('message', {})
});

//Get message page
app.get('/compare', async (req, res) => {
    res.render('compareEVs', {})
});

//creating an account
app.post('/userInfo', async function (req, res) {
    createdUser = await user_info.create(
        {
            firstName: req.body.firstName, 
            lastName: req.body.lastName, 
            city: req.body.city, 
            country: req.body.country, 
            email: req.body.email, 
            username: req.body.username,
            image: req.body.image,
            password: await bcrypt.hash(req.body.password, 12)
         }
    ) 

    let createdUserCar = await user_car_info.create(
        {username, brand, nickname, model, year, mileage, range_mi, range_km, kWh_100mi, kWh_100km } = req.body
    )
    let newuser_info = await user_car_info.findOne ({
        where: {
            username: createdUserCar.username
        }
    })

    if (newuser_info == null) {
        res.statusCode = 400;
        res.send('Unsuccessful');
    } else {
        res.render('login', {})
    }
});

//Garage page (need to change params to query)
app.get('/garage', async (req, res) => {

    let userGarage = await user_car_info.findAll({
        where: {
            id: req.query.id
        }
    })

    let car = await list_of_evs.findAll({
        where: {
            year: userGarage[0].year,
            model: userGarage[0].model,
        }
    })

    let comparables = await user_car_info.findAll({
        where: {
            model: userGarage[0].model
        }
    })

     // list all the properties you care about
    properties = ['year', 'mileage', 'range_mi', 'range_km', 'kWh_100mi', 'kWh_100km']
 
    // create a parsing function
    let parser = (array, stat) => {
        return array.map(x => x[stat])
    }
    // create an averaging function
    let average = (array) => {
        let avg = array.reduce((a, b) => a + b)/array.length
        return math.round(avg)
    }

    // calculate a bunch of averages and store the results
    let averages = {}

    for(i=0; i < properties.length; i++) {
        // parse the metric you care about
        let parsedArray = parser(comparables, properties[i])
        // calc the average
        let avg = average(parsedArray)
        // store the avg to an obj
        averages[properties[i]] = avg
    }
 
    averages.sampleSize = comparables.length

    res.render('garage', {
        locals: {
            userGarage,
            car,
            averages
        }
    })

});


//-----------USER PAGES-------------------------------------

//Account page to view/update user_info
app.get('/account', async (req, res) => {

    let account = await user_info.findAll({
        where: {
            id: req.query.id
        }
    })

    res.render('account', {
        locals: {
            account
        }
    })
});

//user_car_info page to view/update user car info
app.get('/car', async (req, res) => {

    let userCar= await user_car_info.findAll({
        where: {
            id: req.query.id
        }
    })

    res.render('userCarInfo', {
        locals: {
            userCar
        }
    })
});

//userMessage page for a registered user to send us a message (CANNOT delete from user_info if the id is associated is still in user_car_info becasue they are linked by foreign key)
app.get('/usermessage', async (req, res) => {

    let userInfo = await user_car_info.findAll({
        where: {
            id: req.query.id
        }
    })

    res.render('userMessage', {
        locals: {
            userInfo
        }
    })
});


//delete user & the info
app.delete('/userInfo/:id', async (req, res) => {
    let deleteUser =  await user_info.findOne ({
        where: {
            id: req.params.id
        }
    })

    if (deleteUser == null) {
        res.send (`${req.params.id} is not a valid id`)
    } else {
    await user_car_info.destroy({
        where: {
            id: req.params.id
        }
    })
   await user_info.destroy({
        where: {
            id: req.params.id
        }
    })
    res.render('index.html', {})
    }
})

//Changing user info
app.put('/userCarInfo/:id', async (req, res) => {
    let userid = req.params.id

    await user_car_info.update(
        {
        username: req.body.username,
        brand:req.body.brand,
        model:req.body.model,
        year:req.body.year,
        mileage: req.body.mileage,
        range_mi:req.body.range_mi,
        range_km:req.body.range_km,
        kWh_100mi:req.body.kWh_100mi,
        kWh_100km:req.body.kWh_100km
        }, {
            where:{
                id: userid
            }
        })
    
        let userCar= await user_car_info.findAll({
            where: {
                id: userid
            }
        })
    
        res.render('userCarInfo', {
            locals: {
                userCar
            }
        })
});

//Changing user info
app.put('/userInfo/:id', async (req, res) => {
    let userid = req.params.id

    await user_info.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            country: req.body.country,
            email: req.body.email,
            username: req.body.username,
        }, {
            where:{
                id: userid
            }
        })

        let account = await user_info.findAll({
            where: {
                id: userid
            }
        })
    
        res.render('account', {
            locals: {
                account
            }
        })
});

//-----------LOGIN-------------------------------------

// login authentication
app.post('/login', async function (req, res) {
    // first check if all fields are entered
    if (req.body.email == "" || req.body.password == "") {
        res.status(400).send('error: please fill in all fields')
    } else {
        // if so, look up the user by email
        let user = await user_info.findOne({
            where: {
                email: req.body.email
            }
        })
        // check if user exists
        if(user == null) {
            res.status(404).send('error: email not found')
        } else {
            // if user exists, validate password
            let isValid = await bcrypt.compare(req.body.password, user.password)
            if(isValid) {
                // if password successful, redirect to garage
                let userGarage = await user_car_info.findAll({
                    where: {
                        id: user.id
                    }
                })
            
                let car = await list_of_evs.findAll({
                    where: {
                        year: userGarage[0].year,
                        model: userGarage[0].model,
                    }
                })
            
                let comparables = await user_car_info.findAll({
                    where: {
                        model: userGarage[0].model
                    }
                })
            
                 // list all the properties you care about
                properties = ['year', 'mileage', 'range_mi', 'range_km', 'kWh_100mi', 'kWh_100km']
             
                // create a parsing function
                let parser = (array, stat) => {
                    return array.map(x => x[stat])
                }
                // create an averaging function
                let average = (array) => {
                    let avg = array.reduce((a, b) => a + b)/array.length
                    return math.round(avg)
                }
            
                // calculate a bunch of averages and store the results
                let averages = {}
            
                for(i=0; i < properties.length; i++) {
                    // parse the metric you care about
                    let parsedArray = parser(comparables, properties[i])
                    // calc the average
                    let avg = average(parsedArray)
                    // store the avg to an obj
                    averages[properties[i]] = avg
                }
             
                averages.sampleSize = comparables.length
            
                res.render('garage', {
                    locals: {
                        userGarage,
                        car,
                        averages
                    }
                })
            } else {
                res.status(401).send('invalid password')
            }
        }
    }
});

//-----------CALLS FOR ADMINS-------------------------------------
// list of EVs table
app.get('/allcars', async (req, res) => {

    let allCars = await list_of_evs.findAll()

    res.render('compareEVs', {
        locals: {
            allCars
        }
    })

});


app.get('/user_info', async (req, res) => {
    let userInfos = await user_info.findAll();

   res.send(userInfos);
})

app.get('/user_car_info', async (req, res) => {
    let userInfos = await user_car_info.findAll();

   res.send(userInfos);
})

app.get('/EV', async (req, res) => {
    let car = await list_of_evs.findOne ({
        where: {
            year: req.query.year,
            model: req.query.model
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

//get list of EVs
app.get('/compareEVs', async (req, res) => {


    let compareCars = await list_of_evs.findAll();

    
res.render('compareEVs', {
    locals: {
        compareCars
    }
})
});



app.put('/list_of_evs/:id', async (req, res) => {

    await list_of_evs.update(
        {
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            range_mi: req.body.range_mi,
            range_km: req.body.range_km,
            kWh_100mi: req.body.kWh_100mi,
            kWh_100km: req.body.kWh_100km
        }, {
            where:{
                id: req.params.id
            }
        })

    let newlist_of_evs = list_of_evs.findOne ({
        where: {
            id: req.params.id
        }
    })
    
    res.sendStatus(200, newlist_of_evs)
    console.log(newlist_of_evs)

});

// calculate averages for all data-related fields
app.get('/averages', async (req, res) => {
    // extract all data
    let cars = await user_car_info.findAll()

    // list all the properties you care about
    properties = ['year', 'mileage', 'range_mi', 'range_km', 'kWh_100mi', 'kWh_100km']

    // create a parsing function
    let parser = (array, stat) => {
        return array.map(x => x[stat])
    }
    // create an averaging function
    let average = (array) => {
        let avg = array.reduce((a, b) => a + b)/array.length
        return math.round(avg)
    }

    // calculate a bunch of averages and store the results
    let resultsObj = {}

    for(i=0; i < properties.length; i++) {
        // parse the metric you care about
        let parsedArray = parser(cars,properties[i])
        // calc the average
        let avg = average(parsedArray)
        // store the avg to an obj
        resultsObj[properties[i]] = avg
    }

    resultsObj.sampleSize = cars.length

    res.status(200).send(resultsObj)
});

// app.listen(5900, async ()=> {
//     console.log('Server is running on port 5900')

// })