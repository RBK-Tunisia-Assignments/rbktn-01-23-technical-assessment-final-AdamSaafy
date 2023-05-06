const recepiesModel = require("../model/recipiesModel.js");

const getAllRecepies = (req, res) => {
  recepiesModel.getAll(function (error, results) {
    if (error) res.status(500).send(error);
    else res.json(results);
  });
};

const getrecepie = (req, res) => {
  recepiesModel.getOne(function (error, results) {
    if (error) res.status(500).send(error);
    else res.json(results);
  }, req.params.name);
};

const addRecepie = (req , res) => {
  recepiesModel.add(function (error, results) {
    if (error) res.status(500).send(error);
    else res.json(results);
    req.body
    
    
})
}
module.exports = {
  getrecepie,
  getAllRecepies,
  addRecepie
};
//taa status
