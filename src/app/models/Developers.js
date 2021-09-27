module.exports = (sequelize, DataTypes) => {
  const Developers = sequelize.define("Developers", {
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    hobby: DataTypes.STRING,
    datanascimento: DataTypes.DATE
  });

  return Developers;
};