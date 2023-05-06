const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
  const sql = `SELECT * FROM recepie`;
  connection.query(sql, function (error, results) {
    if (error) callback(error, null);
    if (results) callback(null, results);
  });
};

const getreceipe = (callback, recepie_Name) => {
  const syntax = `SELECT FROM recepie WHERE recepie_Name = ?`;
  connection.query(syntax, [recepie_Name], function (error, results) {
    if (error) console.log(error), callback(error, null);
    if (results) callback(null, results);
  });
};

const add=(callback,Cook_Time , Prep_Time,recepie_Name , Serves , categorie , recepie_Image , recepie_Description , recepie_Ingredients )=>{
    const sql=`INSERT INTO recepie (Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients) VALUES(${Cook_Time},${Prep_Time},"${recepie_Name}",${Serves},"${categorie}","${recepie_Image}","${recepie_Description}","${recepie_Ingredients}")`
    connection.query(sql,callback)
  }

//taa querry
module.exports = { getAll, getreceipe, add };
