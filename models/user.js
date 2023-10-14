const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
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
  profilePic: {
    type: Buffer,
  },
});

userSchema.statics.isThisEmailInUse = async function (email) {
    if(!email)throw new Error('Invalid Email')
  try {
    const user = await this.findOne({ email });
    if (user) return false;
    else return true;
  } catch (error) {
    console.log(error)
    return false
  }
};

module.exports = mongoose.model("User", userSchema);
