'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listOfEvs', [
    //https://www.fueleconomy.gov/
    //2012
    {
    brand: 'Tesla',
    model: 'Model S',
    year: 2012,
    range_mi: 265,
    range_km: 426,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2013
    {
    brand: 'Tesla',
    model: 'Model S (40 kW-hr battery pack)',
    year: 2013,
    range_mi: 139,
    range_km: 224,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S (60 kW-hr battery pack)',
    year: 2013,
    range_mi: 208,
    range_km: 335,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S (85 kW-hr battery pack)',
    year: 2013,
    range_mi: 265,
    range_km: 426,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2014
    {
    brand: 'Tesla',
    model: 'Model S (60 kW-hr battery pack)',
    year: 2014,
    range_mi: 208,
    range_km: 335,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S (85 kW-hr battery pack)',
    year: 2014,
    range_mi: 265,
    range_km: 426,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD (85 kW-hr battery pack)',
    year: 2014,
    range_mi: 242,
    range_km: 389,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2015
    {
    brand: 'Tesla',
    model: 'Model S AWD - P90D',
    year: 2015,
    range_mi: 253,
    range_km: 407,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - P85D',
    year: 2015,
    range_mi: 253,
    range_km: 407,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 90D',
    year: 2015,
    range_mi: 270,
    range_km: 435,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 85D',
    year: 2015,
    range_mi: 270,
    range_km: 435,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 70D',
    year: 2015,
    range_mi: 240,
    range_km: 386,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S (90 kW-hr battery pack)',
    year: 2015,
    range_mi: 265,
    range_km: 426,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S (85 kW-hr battery pack)',
    year: 2015,
    range_mi: 265,
    range_km: 426,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S (60 kW-hr battery pack)',
    year: 2015,
    range_mi: 208,
    range_km: 335,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2016 Model S
    {
    brand: 'Tesla',
    model: 'Model S (60 kW-hr battery pack)',
    year: 2016,
    range_mi: 210,
    range_km: 338,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD (70 kW-hr battery pack)',
    year: 2016,
    range_mi: 234,
    range_km: 377,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD (75 kW-hr battery pack)',
    year: 2016,
    range_mi: 249,
    range_km: 401,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD (85 kW-hr battery pack)',
    year: 2016,
    range_mi: 265,
    range_km: 426,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD (90 kW-hr battery pack)',
    year: 2016,
    range_mi: 265,
    range_km: 426,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 60D',
    year: 2016,
    range_mi: 218,
    range_km: 351,
    kWh_100mi: 32,
    kWh_100km: 20,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 75D',
    year: 2016,
    range_mi: 259,
    range_km: 417,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 85D',
    year: 2016,
    range_mi: 270,
    range_km: 435,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 90D',
    year: 2016,
    range_mi: 294,
    range_km: 473,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - P100D',
    year: 2016,
    range_mi: 315,
    range_km: 507,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - P85D',
    year: 2016,
    range_mi: 253,
    range_km: 407,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - P90D',
    year: 2016,
    range_mi: 270,
    range_km: 435,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2016 Model X
    {
    brand: 'Tesla',
    model: 'Model X AWD - 60D',
    year: 2016,
    range_mi: 200,
    range_km: 322,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - 75D',
    year: 2016,
    range_mi: 238,
    range_km: 383,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - 90D',
    year: 2016,
    range_mi: 257,
    range_km: 414,
    kWh_100mi: 37,
    kWh_100km: 23,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - 100D',
    year: 2016,
    range_mi: 289,
    range_km: 465,
    kWh_100mi: 39,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - P90D',
    year: 2016,
    range_mi: 250,
    range_km: 402,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2017 Model 2
    {
    brand: 'Tesla',
    model: 'Model 3 Long Range',
    year: 2017,
    range_mi: 310,
    range_km: 499,
    kWh_100mi: 27,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2017 Model S
    {
    brand: 'Tesla',
    model: 'Model S (60 kW-hr battery pack)',
    year: 2017,
    range_mi: 210,
    range_km: 338,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S (75 kW-hr battery pack)',
    year: 2017,
    range_mi: 249,
    range_km: 401,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 100D',
    year: 2017,
    range_mi: 335,
    range_km: 539,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 60D',
    year: 2017,
    range_mi: 218,
    range_km: 351,
    kWh_100mi: 32,
    kWh_100km: 20,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 75D',
    year: 2017,
    range_mi: 259,
    range_km: 417,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - 90D',
    year: 2017,
    range_mi: 294,
    range_km: 473,
    kWh_100mi: 32,
    kWh_100km: 20,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - P100D',
    year: 2017,
    range_mi: 315,
    range_km: 507,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S AWD - P90D',
    year: 2017,
    range_mi: 270,
    range_km: 435,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2017 Model X
    {
    brand: 'Tesla',
    model: 'Model X AWD - 100D',
    year: 2017,
    range_mi: 295,
    range_km: 475,
    kWh_100mi: 39,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - 60D',
    year: 2017,
    range_mi: 200,
    range_km: 322,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - 75D',
    year: 2017,
    range_mi: 238,
    range_km: 383,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - 90D',
    year: 2017,
    range_mi: 257,
    range_km: 414,
    kWh_100mi: 37,
    kWh_100km: 23,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - P100D',
    year: 2017,
    range_mi: 289,
    range_km: 465,
    kWh_100mi: 39,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X AWD - P90D',
    year: 2017,
    range_mi: 250,
    range_km: 402,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2018 Model 3
    {
    brand: 'Tesla',
    model: 'Model 3 Long Range',
    year: 2018,
    range_mi: 310,
    range_km: 499,
    kWh_100mi: 26,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Long Range AWD',
    year: 2018,
    range_mi: 310,
    range_km: 499,
    kWh_100mi: 29,
    kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Long Range AWD Performance',
    year: 2018,
    range_mi: 310,
    range_km: 499,
    kWh_100mi: 29,
    kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Mid Range',
    year: 2018,
    range_mi: 260,
    range_km: 418,
    kWh_100mi: 27,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2018 Model S
    {
    brand: 'Tesla',
    model: 'Model S 100D',
    year: 2018,
    range_mi: 335,
    range_km: 539,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S 75D',
    year: 2018,
    range_mi: 259,
    range_km: 417,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S 75kWh',
    year: 2018,
    range_mi: 249,
    range_km: 401,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S P100D',
    year: 2018,
    range_mi: 315,
    range_km: 507,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2018 Model X
    {
    brand: 'Tesla',
    model: 'Model X 100D',
    year: 2018,
    range_mi: 295,
    range_km: 475,
    kWh_100mi: 39,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X 75D	',
    year: 2018,
    range_mi: 238,
    range_km: 383,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2019 Model 3
    {
    brand: 'Tesla',
    model: 'Model 3 Long Range',
    year: 2019,
    range_mi: 310,
    range_km: 499,
    kWh_100mi: 26,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Long Range AWD Performance',
    year: 2019,
    range_mi: 310,
    range_km: 499,
    kWh_100mi: 29,
    kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Mid Range',
    year: 2019,
    range_mi: 264,
    range_km: 425,
    kWh_100mi: 27,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Standard Range',
    year: 2019,
    range_mi: 220,
    range_km: 354,
    kWh_100mi: 26,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Standard Range Plus',
    year: 2019,
    range_mi: 240,
    range_km: 386,
    kWh_100mi: 25,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2019 Model S
    {
    brand: 'Tesla',
    model: 'Model S 100D',
    year: 2019,
    range_mi: 335,
    range_km: 539,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S 75D',
    year: 2019,
    range_mi: 259,
    range_km: 417,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Long Range',
    year: 2019,
    range_mi: 370,
    range_km: 595,
    kWh_100mi: 30,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S P100D',
    year: 2019,
    range_mi: 315,
    range_km: 507,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Performance (19in Wheels)',
    year: 2019,
    range_mi: 345,
    range_km: 555,
    kWh_100mi: 32,
    kWh_100km: 20,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Performance (21in Wheels)',
    year: 2019,
    range_mi: 325,
    range_km: 523,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Standard Range',
    year: 2019,
    range_mi: 285,
    range_km: 459,
    kWh_100mi: 31,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2019 Model X
    {
    brand: 'Tesla',
    model: 'Model X 100D',
    year: 2019,
    range_mi: 295,
    range_km: 475,
    kWh_100mi: 39,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X 75D',
    year: 2019,
    range_mi: 238,
    range_km: 383,
    kWh_100mi: 36,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Long Range',
    year: 2019,
    range_mi: 325,
    range_km: 523,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X P100D',
    year: 2019,
    range_mi: 289,
    range_km: 465,
    kWh_100mi: 40,
    kWh_100km: 25,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Performance (22in Wheels)',
    year: 2019,
    range_mi: 270,
    range_km: 435,
    kWh_100mi: 43,
    kWh_100km: 27,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2020 Model 3
    {
    brand: 'Tesla',
    model: 'Model 3 Long Range',
    year: 2020,
    range_mi: 330,
    range_km: 531,
    kWh_100mi: 26,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Long Range AWD',
    year: 2020,
    range_mi: 322,
    range_km: 518,
    kWh_100mi: 28,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Long Range Performance AWD (18in)',
    year: 2020,
    range_mi: 322,
    range_km: 518,
    kWh_100mi: 28,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Long Range Performance AWD (19in)',
    year: 2020,
    range_mi: 304,
    range_km: 489,
    kWh_100mi: 29,
    kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Long Range Performance AWD (20in)',
    year: 2020,
    range_mi: 299,
    range_km: 481,
    kWh_100mi: 30,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Mid Range',
    year: 2020,
    range_mi: 264,
    range_km: 425,
    kWh_100mi: 27,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Standard Range',
    year: 2020,
    range_mi: 220,
    range_km: 354,
    kWh_100mi: 26,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Standard Range Plus',
    year: 2020,
    range_mi: 250,
    range_km: 402,
    kWh_100mi: 24,
    kWh_100km: 15,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2020 Model S
    {
    brand: 'Tesla',
    model: 'Model S Long Range',
    year: 2020,
    range_mi: 373,
    range_km: 600,
    kWh_100mi: 30,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Long Range Plus',
    year: 2020,
    range_mi: 402,
    range_km: 647,
    kWh_100mi: 29,
    kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Performance (19in Wheels)',
    year: 2020,
    range_mi: 348,
    range_km: 560,
    kWh_100mi: 32,
    kWh_100km: 20,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Performance (21in Wheels)',
    year: 2020,
    range_mi: 326,
    range_km: 525,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Standard Range',
    year: 2020,
    range_mi: 287,
    range_km: 462,
    kWh_100mi: 31,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2020 Model X
    {
    brand: 'Tesla',
    model: 'Model X Long Range',
    year: 2020,
    range_mi: 328,
    range_km: 528,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Long Range Plus',
    year: 2020,
    range_mi: 351,
    range_km: 565,
    kWh_100mi: 32,
    kWh_100km: 20,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Performance (20in Wheels)',
    year: 2020,
    range_mi: 305,
    range_km: 491,
    kWh_100mi: 38,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Performance (22in Wheels)',
    year: 2020,
    range_mi: 272,
    range_km: 438,
    kWh_100mi: 43,
    kWh_100km: 27,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Standard Range',
    year: 2020,
    range_mi: 258,
    range_km: 415,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2020 Model Y
    {
    brand: 'Tesla',
    model: 'Model Y Long Range AWD',
    year: 2020,
    range_mi: 316,
    range_km: 509,
    kWh_100mi: 28,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model Y Performance AWD',
    year: 2020,
    range_mi: 315,
    range_km: 507,
    kWh_100mi: 28,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model Y Performance AWD (21in Wheels)',
    year: 2020,
    range_mi: 291,
    range_km: 468,
    kWh_100mi: 30,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2021 Model 3
    {
    brand: 'Tesla',
    model: 'Model 3 Long Range AWD',
    year: 2021,
    range_mi: 353,
    range_km: 568,
    kWh_100mi: 25,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Performance AWD',
    year: 2021,
    range_mi: 315,
    range_km: 507,
    kWh_100mi: 30,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Standard Range Plus RWD',
    year: 2021,
    range_mi: 263,
    range_km: 423,
    kWh_100mi: 24,
    kWh_100km: 15,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    // 2021 Model S
    {
    brand: 'Tesla',
    model: 'Model S Long Range',
    year: 2021,
    range_mi: 405,
    range_km: 652,
    kWh_100mi: 28,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Performance (19in Wheels)',
    year: 2021,
    range_mi: 387,
    range_km: 623,
    kWh_100mi: 31,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Performance (21in Wheels)',
    year: 2021,
    range_mi: 334,
    range_km: 538,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Plaid (21in Wheels)',
    year: 2021,
    range_mi: 348,
    range_km: 560,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2021 Model X
    {
    brand: 'Tesla',
    model: 'Model X Long Range Plus',
    year: 2021,
    range_mi: 371,
    range_km: 597,
    kWh_100mi: 32,
    kWh_100km: 20,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Performance (20in Wheels)',
    year: 2021, 
    range_mi: 341,
    range_km: 549,
    kWh_100mi: 35,
    kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Performance (22in Wheels)',
    year: 2021,
    range_mi: 300,
    range_km: 483,
    kWh_100mi: 39,
    kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2021 Model Y
    {
    brand: 'Tesla',
    model: 'Model Y Long Range AWD',
    year: 2021,
    range_mi: 326,
    range_km: 525,
    kWh_100mi: 27,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model Y Performance AWD',
    year: 2021,
    range_mi: 303,
    range_km: 488,
    kWh_100mi: 30,
    kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model Y Standard Range RWD',
    year: 2021,
    range_mi: 244,
    range_km: 393,
    kWh_100mi: 26,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2022 Model 3
    {
    brand: 'Tesla',
    model: 'Model 3 Long Range AWD',
    year: 2022,
    range_mi: 358,
    range_km: 576,
    kWh_100mi: 26,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 Performance AWD',
    year: 2022,
    range_mi: 315,
    range_km: 507,
    kWh_100mi: 30,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model 3 RWD',
    year: 2022,
    range_mi: 272,
    range_km: 438,
    kWh_100mi: 25,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    // 2022 Model S
    {
    brand: 'Tesla',
    model: 'Model S',
    year: 2022,
    range_mi: 405,
    range_km: 652,
    kWh_100mi: 28,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Plaid (19in Wheels)',
    year: 2022,
    range_mi: 396,
    range_km: 637,
    kWh_100mi: 29,
    kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model S Plaid (21in Wheels)',
    year: 2022,
    range_mi: 348,
    range_km: 560,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2022 Model X
    {
    brand: 'Tesla',
    model: 'Model X',
    year: 2022,
    range_mi: 348,
    range_km: 560,
    kWh_100mi: 33,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Plaid (20in Wheels)',
    year: 2022, 
    range_mi: 333,
    range_km: 536,
    kWh_100mi: 34,
    kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model X Plaid (22in Wheels)',
    year: 2022,
    range_mi: 311,
    range_km: 501,
    kWh_100mi: 37,
    kWh_100km: 23,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2022 Model Y
    {
    brand: 'Tesla',
    model: 'Model Y AWD',
    year: 2022,
    range_mi: 279,
    range_km: 449,
    kWh_100mi: 28,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model Y Long Range AWD',
    year: 2022,
    range_mi: 330,
    range_km: 531,
    kWh_100mi: 28,
    kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model Y Performance AWD',
    year: 2022,
    range_mi: 303,
    range_km: 488,
    kWh_100mi: 30,
    kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, {
    brand: 'Tesla',
    model: 'Model Y RWD',
    year: 2022,
    range_mi: 244,
    range_km: 393,
    kWh_100mi: 26,
    kWh_100km: 16,
    createdAt: new Date(),
    updatedAt: new Date()
    },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
