const {User} = require("../models");

class UserController {
  async create(req, res) {
    const {nome,email,password} = req.body;

    const dados = {nome,email,password}

    console.log(dados.nome);
    try{
      const user = await User.create(dados);

      return res.status(200).send({user})
    }
    catch {
      return res.status(400).send({menssage: "error"});
    }
  
  }
 
}

module.exports = new UserController();