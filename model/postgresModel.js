const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../dbCon/postgresdbConn");

class postgresModel extends Model {}
postgresModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "postgresModel"
  }
);
module.exports = postgresModel;
