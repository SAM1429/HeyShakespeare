const User = require('../models/user')

exports.createUser = async (req,res)=>{
    const {username,email,password} = req.body
      let isNewUser = await User.isThisEmailInUse(email);
      if (!isNewUser) {
        return res.json({
          success: false,
          message: "email already signed up, try signing in",
        });
      }
      const user = await User({
        username,
        email,
        password
      });
      await user.save();
      res.json(user);
}