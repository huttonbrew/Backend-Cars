'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_car_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user_info}) {
      // define association here
      user_car_info.belongsTo(user_info, {
        foreignKey: 'id',
        constraints: false,
        onDelete: 'cascade'
      });
    }
  }
  user_car_info.init(
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
    modelName: 'user_car_info',
    freezeTableName: true
  });
  return user_car_info;
};