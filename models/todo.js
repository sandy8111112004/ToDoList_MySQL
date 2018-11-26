module.exports = function(sequelize, DataTypes) {
  let Todo = sequelize.define("Todo", {
    newInput:{
      type:DataTypes.STRING,
      allowNull: false,
      validation:{
        len:[1,140]
      }
    },
    inputBox:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
    });
  return Todo;
};