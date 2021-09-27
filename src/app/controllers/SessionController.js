const {User} = require("../models");

class SessionController {
  async store(req, res) {
    const {email,password} = req.body;
    const user = await User.findOne({where: {email}});
    if (!user){
      return res.status(401).json({message: 'Invalid access data'})
    }

    if(!(await user.checkPassword(password))){
      return res.status(401).json({message: 'Invalid access data'});
    }
    return res.json({
      user,
      token: user.generateToken()
    });
  }
}

module.exports = new SessionController();