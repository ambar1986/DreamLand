'use strict';
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.INTEGER,
      isInt: true,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      max: 700
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      }
    }
  });
  return Review;
};