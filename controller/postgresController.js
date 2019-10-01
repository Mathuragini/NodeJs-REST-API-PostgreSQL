const postgresModel = require("../model/postgresModel");
require("express-async-errors");

const getAll = async (req, res) => {
  const data = await postgresModel.findAll({
    attributes: ["id", "name"]
  });
  res.send(data);
};
const getOne = async (req, res) => {
  const data = await postgresModel.findOne({
    attributes: ["id", "name"],
    where: { id: req.params.id }
  });
  res.status(200).send(data);
};

const saveOne = async (req, res) => {
  const data = await postgresModel.create(req.body);
  res.status(200).send(data);
};

const updateOne = async (req, res) => {
  const data = await postgresModel.update(req.body, {
    where: { id: req.params.id }
  });
  res.status(200).send(data);
};

const deleteOne = async (req, res) => {
  const data = await postgresModel.destroy({
    where: { id: req.params.id }
  });
  res.status(200).send("Deleted");
};
module.exports = { getAll, getOne, saveOne, updateOne, deleteOne };
