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
    static associate(models) {
      // define association here
    }
  }
  userCarInfo.init(
    {
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
    milage: {
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
    }
  }, {
    sequelize: sequelize,
    modelName: 'userCarInfo',
    freezeTableName: true
  });
  return userCarInfo;
};