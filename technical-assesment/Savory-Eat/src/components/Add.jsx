import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Add = (props) => {
  const [Recepies, setRecepies] = useState({})

  const [recepie_Name, setName] = useState('');
  const [Cook_Time, setCook_Time] = useState('');
  const [Prep_Time, setPrep_Time] = useState('');
  const [Serves, setServes] = useState('');
  const [categorie, setCategorie] = useState('');
  const [recepie_Description, setRecepie_Description] = useState('');
  const [recepie_Ingredients, setRecepie_Ingredients] = useState('');
  const [recepie_Image, setRecepie_Image] = useState('');



  const handleSubmit = (e) => {
      e.preventDefault();
  
      const newRecepie = { 
        recepie_Name:recepie_Name,
            Cook_Time: Cook_Time,
             Prep_Time: Prep_Time,
              Serves: Serves,
               categorie:categorie,
    recepie_Description:recepie_Description, 
    recepie_Ingredients:recepie_Ingredients, 
    recepie_Image:recepie_Image,  
              };
    
    axios.post('http://127.0.0.1:4000/api/recepie/addRecepie', newRecepie)
    
       .then(res => {
              console.log(res.data);
              setName('')
              setCook_Time('');
              setPrep_Time('');
              setServes('');
              setCategorie('');
      setRecepie_Description('');
      setRecepie_Ingredients('');
      setRecepie_Image('');
            })
            .catch(err => console.log(err));
        };
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setRecepies((prevRecepies) => ({
            ...prevRecepies,
            [name]: value
          }));
        };
      
      
      return (
        <div className="add-recipe-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="recepie_Name"
            value={Recepies.recepie_Name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>
        <div className="form-group">
          <label>Cook Time:</label>
          <input
            type="number"
            placeholder="Cooking Time"
            name="Cook_Time"
            value={Recepies.Cook_Time}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <label>Prep Time:</label>
          <input
            type="number"
            placeholder="Preparation Time"
            name="Prep_Time"
            value={Recepies.Prep_Time}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <label>Serves:</label>
          <input
            type="number"
            placeholder="Serves"
            name="Serves"
            value={Recepies.Serves}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            placeholder="Category"
            name="categorie"
            value={Recepies.categorie}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            name="recepie_Description"
            value={Recepies.recepie_Description}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <input
            placeholder="Ingredients"
            name="recepie_Ingredients"
            value={Recepies.recepie_Ingredients}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="text"
            placeholder="Image URL"
            name="recepie_Image"
            value={Recepies.recepie_Image}
            onChange={handleChange}
            />
        </div>
        <button  type="submit" className="create-recipe-btn">
        Create Recipe
        </button>
      </form>
    </div>
  );
      }
  export default Add;
  
  // const [Recepies, setRecepies] = useState({
    //   recepie_Name: "",
    //   Cook_Time: "",
    //   Prep_Time: "",
    //   Serves: "",
    //   categorie: "",
    //   recepie_Description: "",
    //   recepie_Image: ""
    
    
   
        
        // const handleSubmit = (event) => {
          //   event.preventDefault();
          //   axios.post('http://127.0.0.1:4000/api/recepie/Add', Recepies)
          //   .then(response => {
            //     console.log('Recipe added successfully');
            //     // Perform any additional actions or handle the response as needed
            //   })
            //   .catch(error => {
              //     console.error('Failed to add recipe', error);
              //     // Handle the error or display an error message
              //   });    console.log(Recepies);
              //   // Add your code here to send the recipe object to the server for adding to the database
              // }
//   recepie_Ingredients: "",
// });