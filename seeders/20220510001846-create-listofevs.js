'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listOfEvs', [
    //https://www.fueleconomy.gov/
    //2012
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2012,
    topRange_mi: 265,
    botRange_mi: 265,
    topRange_km: 426,
    botRange_km: 426,
    top_kWh_100mi: 38,
    bot_kWh_100mi: 38,
    top_kWh_100km: 24,
    bot_kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2013
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2013,
    topRange_mi: 265,
    botRange_mi: 139,
    topRange_km: 426,
    botRange_km: 224,
    top_kWh_100mi: 35,
    bot_kWh_100mi: 36,
    top_kWh_100km: 22,
    bot_kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2014
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2014,
    topRange_mi: 265,
    botRange_mi: 208,
    topRange_km: 426,
    botRange_km: 335,
    top_kWh_100mi: 35,
    bot_kWh_100mi: 38,
    top_kWh_100km: 22,
    bot_kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2015
    {
    brand: 'Tesla',
    model: 'Model _S',
    year: 2015,
    topRange_mi: 270,
    botRange_mi: 208,
    topRange_km: 435,
    botRange_km: 335,
    top_kWh_100mi: 33,
    bot_kWh_100mi: 38,
    top_kWh_100km: 21,
    bot_kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2016 Model S
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2016,
    topRange_mi: 315,
    botRange_mi: 208,
    topRange_km: 507,
    botRange_km: 335,
    top_kWh_100mi: 32,
    bot_kWh_100mi: 38,
    top_kWh_100km: 20,
    bot_kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2016 Model X
    {
    brand: 'Tesla',
    model: 'Model_X',
    year: 2016,
    topRange_mi: 289,
    botRange_mi: 200,
    topRange_km: 465,
    botRange_km: 322,
    top_kWh_100mi: 36,
    bot_kWh_100mi: 39,
    top_kWh_100km: 20,
    bot_kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2017 Model 3
    {
    brand: 'Tesla',
    model: 'Model _3',
    year: 2017,
    topRange_mi: 310,
    botRange_mi: 310,
    topRange_km: 499,
    botRange_km: 499,
    top_kWh_100mi: 27,
    bot_kWh_100mi: 27,
    top_kWh_100km: 17,
    bot_kWh_100km: 17,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2017 Model S
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2017,
    topRange_mi: 335,
    botRange_mi: 210,
    topRange_km: 539,
    botRange_km: 338,
    top_kWh_100mi: 32,
    bot_kWh_100mi: 35,
    top_kWh_100km: 20,
    bot_kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2017 Model X
    {
    brand: 'Tesla',
    model: 'Model_X',
    year: 2017,
    topRange_mi: 295,
    botRange_mi: 238,
    topRange_km: 475,
    botRange_km: 383,
    top_kWh_100mi: 32,
    bot_kWh_100mi: 35,
    top_kWh_100km: 20,
    bot_kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2018 Model 3
    {
    brand: 'Tesla',
    model: 'Model_3',
    year: 2018,
    topRange_mi: 310,
    botRange_mi: 260,
    topRange_km: 499,
    botRange_km: 418,
    top_kWh_100mi: 26,
    bot_kWh_100mi: 29,
    top_kWh_100km: 16,
    bot_kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2018 Model S
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2018,
    topRange_mi: 335,
    botRange_mi: 249,
    topRange_km: 539,
    botRange_km: 401,
    top_kWh_100mi: 33,
    bot_kWh_100mi: 35,
    top_kWh_100km: 21,
    bot_kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2018 Model X
    {
    brand: 'Tesla',
    model: 'Model_X',
    year: 2018,
    topRange_mi: 295,
    botRange_mi: 238,
    topRange_km: 475,
    botRange_km: 383,
    top_kWh_100mi: 36,
    bot_kWh_100mi: 39,
    top_kWh_100km: 22,
    bot_kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2019 Model 3
    {
    brand: 'Tesla',
    model: 'Model_3',
    year: 2019,
    topRange_mi: 310,
    botRange_mi: 220,
    topRange_km: 499,
    botRange_km: 354,
    top_kWh_100mi: 26,
    bot_kWh_100mi: 29,
    top_kWh_100km: 16,
    bot_kWh_100km: 18,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2019 Model S
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2019,
    topRange_mi: 370,
    botRange_mi: 259,
    topRange_km: 595,
    botRange_km: 417,
    top_kWh_100mi: 30,
    bot_kWh_100mi: 35,
    top_kWh_100km: 19,
    bot_kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2019 Model X
    {
    brand: 'Tesla',
    model: 'Model_X',
    year: 2019,
    topRange_mi: 325,
    botRange_mi: 238,
    topRange_km: 523,
    botRange_km: 383,
    top_kWh_100mi: 35,
    bot_kWh_100mi: 43,
    top_kWh_100km: 22,
    bot_kWh_100km: 27,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2020 Model 3
    {
    brand: 'Tesla',
    model: 'Model_3',
    year: 2020,
    topRange_mi: 330,
    botRange_mi: 220,
    topRange_km: 531,
    botRange_km: 354,
    top_kWh_100mi: 24,
    bot_kWh_100mi: 30,
    top_kWh_100km: 15,
    bot_kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2020 Model S
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2020,
    topRange_mi: 402,
    botRange_mi: 287,
    topRange_km: 647,
    botRange_km: 462,
    top_kWh_100mi: 29,
    bot_kWh_100mi: 35,
    top_kWh_100km: 18,
    bot_kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2020 Model X
    {
    brand: 'Tesla',
    model: 'Model_X',
    year: 2020,
    topRange_mi: 351,
    botRange_mi: 258,
    topRange_km: 565,
    botRange_km: 415,
    top_kWh_100mi: 32,
    bot_kWh_100mi: 43,
    top_kWh_100km: 20,
    bot_kWh_100km: 27,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 

    //2020 Model Y
    {
    brand: 'Tesla',
    model: 'Model_Y',
    year: 2020,
    topRange_mi: 316,
    botRange_mi: 291,
    topRange_km: 509,
    botRange_km: 468,
    top_kWh_100mi: 28,
    bot_kWh_100mi: 30,
    top_kWh_100km: 17,
    bot_kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2021 Model 3
    {
    brand: 'Tesla',
    model: 'Model_3',
    year: 2021,
    topRange_mi: 353,
    botRange_mi: 263,
    topRange_km: 568,
    botRange_km: 423,
    top_kWh_100mi: 24,
    bot_kWh_100mi: 30,
    top_kWh_100km: 15,
    bot_kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    // 2021 Model S
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2021,
    topRange_mi: 405,
    botRange_mi: 334,
    topRange_km: 652,
    botRange_km: 538,
    top_kWh_100mi: 28,
    bot_kWh_100mi: 35,
    top_kWh_100km: 17,
    bot_kWh_100km: 22,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2021 Model X
    {
    brand: 'Tesla',
    model: 'Model_X',
    year: 2021,
    topRange_mi: 371,
    botRange_mi: 300,
    topRange_km: 597,
    botRange_km: 483,
    top_kWh_100mi: 32,
    bot_kWh_100mi: 39,
    top_kWh_100km: 20,
    bot_kWh_100km: 24,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2021 Model Y
    {
    brand: 'Tesla',
    model: 'Model_Y',
    year: 2021,
    topRange_mi: 326,
    botRange_mi: 244,
    topRange_km: 525,
    botRange_km: 393,
    top_kWh_100mi: 26,
    bot_kWh_100mi: 30,
    top_kWh_100km: 16,
    bot_kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2022 Model 3
    {
    brand: 'Tesla',
    model: 'Model_3',
    year: 2022,
    topRange_mi: 358,
    botRange_mi: 272,
    topRange_km: 576,
    botRange_km: 438,
    top_kWh_100mi: 25,
    bot_kWh_100mi: 30,
    top_kWh_100km: 16,
    bot_kWh_100km: 19,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    // 2022 Model S
    {
    brand: 'Tesla',
    model: 'Model_S',
    year: 2022,
    topRange_mi: 405,
    botRange_mi: 348,
    topRange_km: 652,
    botRange_km: 560,
    top_kWh_100mi: 28,
    bot_kWh_100mi: 33,
    top_kWh_100km: 17,
    bot_kWh_100km: 21,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    
    //2022 Model X
    {
    brand: 'Tesla',
    model: 'Model_X',
    year: 2022,
    topRange_mi: 348,
    botRange_mi: 311,
    topRange_km: 560,
    botRange_km: 501,
    top_kWh_100mi: 33,
    bot_kWh_100mi: 37,
    top_kWh_100km: 21,
    bot_kWh_100km: 23,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
    //2022 Model Y
    {
    brand: 'Tesla',
    model: 'Model _Y',
    year: 2022,
    topRange_mi: 330,
    botRange_mi: 244,
    topRange_km: 531,
    botRange_km: 393,
    top_kWh_100mi: 26,
    bot_kWh_100mi: 30,
    top_kWh_100km: 16,
    bot_kWh_100km: 19,
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
