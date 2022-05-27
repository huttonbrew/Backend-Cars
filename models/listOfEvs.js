'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list_of_evs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  list_of_evs.init(
    {
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type:DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    topRange_mi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    botRange_mi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    topRange_km: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    botRange_km: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    top_kWh_100mi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bot_kWh_100mi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    top_kWh_100km: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bot_kWh_100km: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'list_of_evs',
    freezeTableName: true
  });
  return list_of_evs;
};