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
  const syntax = `SELECT FROM recepie WHERE recepie_Name =?`;
  connection.query(syntax, [recepie_Name], function (error, results) {
    if (error) console.log(error), callback(error, null);
    if (results) callback(null, results);
  });
};

const add = (data, callback) => {
    const syntax = `INSERT INTO recepie SET recepie_Name=?, Cook_Time=?, Prep_Time=?, Serves=?, categorie=?, recepie_Description=?, recepie_Ingredients=?, recepie_Image=?`;
    connection.query(syntax,[values.recepie_Name , values.Cook_Time , values.Prep_Time , values.Serves , values.categorie , values.recepie_Description , values.recepie_Ingredients , values.recepie_Image], function(error , results){
       if(error) callback(error,null)
       if(results) callback(null,results)
    })
};

//taa querry
module.exports = { getAll, getreceipe, add };
