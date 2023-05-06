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
  }, req.params.recepie_name);
};

const addRecepie = (req , res) => {
 

  recepiesModel.add(Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,function (error, results) {
    if (error) res.status(500).send(error);
    else res.json(results);
    
    
})
}
module.exports = {
  getrecepie,
  getAllRecepies,
  addRecepie
};
//taa status
