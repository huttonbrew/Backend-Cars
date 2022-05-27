'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userCarInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  userCarInfo.init(
    {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
      },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    range_mi: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    range_km: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kWh_100mi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kWh_100km: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'userCarInfo',
    freezeTableName: true
  });
  return userCarInfo;
};