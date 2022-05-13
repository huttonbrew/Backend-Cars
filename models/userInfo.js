'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userInfo.init(
    {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
<<<<<<< HEAD
  }, {
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
      const salt = await bcrypt.genSaltSync(10, 'a');
      user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  }
  }, {
    sequelize: sequelize,
=======
  },  {
    sequelize,
>>>>>>> 48e87e38cb8d451d277e5b458441d42d485c8803
    modelName: 'userInfo',
    freezeTableName: true,
  });
  return userInfo;
};