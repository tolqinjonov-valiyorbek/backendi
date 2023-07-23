const mongoose = require("mongoose"); // Erase if already required
//const bcrypt = require("bcrypt");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
        type:Boolean,
        default:false,
    },
    
  },
  {
    timestamps: true,
  }
);


//Export the model
module.exports = mongoose.model("User", userSchema);
