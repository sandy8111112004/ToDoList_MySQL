// let mongoose = require("mongoose");
// let Schema = mongoose.Schema;

// let ToDoSchema = new Schema({
//   newInput:{
//     type: String,
//     trim: true,
//     required: "Please enter a to-do Entry"
//   },
//   inputBox:{
//     type: Boolean
//   }
// });

// let ToDo = mongoose.model("ToDo", ToDoSchema);

// module.exports = ToDo;


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