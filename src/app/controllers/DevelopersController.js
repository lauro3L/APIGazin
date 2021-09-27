const { Developers } = require("../models");
const { Sequelize } = require("sequelize");

class DevelopersController {
  async create(req, res) {
    const { nome, sexo, idade, hobby, datanascimento } = req.body;

    const dados = { nome, sexo, idade, hobby, datanascimento };

    try {
      await Developers.create(dados);
      return res
        .status(201)
        .send({ menssage: "developer successfully registered" });
    } catch (err) {
      return res.status(400).send({
        error: true,
        message: `Error occurred while trying to insert Developer: ${err}`,
      });
    }
  }
  async delete(req, res) {
    const id = req.params.id;

    try {
      await Developers.destroy({
        where: {
          id: id,
        },
      });
      return res
        .status(204)
        .send({ menssage: "successfully deleted developer" });
    } catch (err) {
      return res.status(400).send({
        error: true,
        menssage: `Error occurred while trying to delete: ${err}`,
      });
    }
  }
  async put(req, res) {

    const id = req.params.id;
    try {
      await Developers.update(req.body,{
        where: {
          id: id,
        },
      });
      return res
        .status(200)
        .send({ menssage: "successfully update developer" });
    } catch (err) {
      return res.status(400).send({
        error: true,
        menssage: `Error occurred while trying to update: ${err}`,
      });
    }
  }

  async get(req, res) {
    const op = Sequelize.Op;
    const nome = req.query.nome;
    const _count = req.query._count;
    const _limit = req.query._limit
    if (nome) {
      Developers.findAndCountAll({
        where: {
          nome: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("nome")),
            "LIKE",
            nome + "%"
          ),
        },
        offset: _count,
        limit: _limit,
      })
        .then((developers) => { 
          if (developers.count > 0) {
            res.status(200).send(developers);
          } else {
            res.status(404).send(developers);
          }
        })
        .catch((erro) => {
          res.status(500).send({ mensagem: erro.message });
        });
    } else {
      Developers.findAndCountAll({
        offset: req.body.count,
        limit: req.body.limit,
      }).then((developers) => {      
          res.status(200).send(developers);      
      });
    }
  }
  async getById(req, res) {
    const id = req.params.id;
    Developers.findByPk(id)
      .then((developers) => {
        if (developers != null) {
          res.status(200).send(developers);
        } else {
          res.status(404).send({ message: "no data found" });
        }
      })
      .catch((erro) => {
        res.status(500).send({ mensagem: erro.message });
      });
  }
}

module.exports = new DevelopersController();
