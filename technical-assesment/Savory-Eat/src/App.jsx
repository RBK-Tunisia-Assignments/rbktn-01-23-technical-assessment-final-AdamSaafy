//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useState}from "react";
import "./App.css";
import Add from "./components/Add.jsx"
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
import Recepies from "./data/data.json" 
function App() {
const [view,setView]=useState('Home')
  let changeView = (view) => {
    setView(view);
  };
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home  changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies   changeView={changeView} Recepies={Recepies} key={Recepies.recepie_Name} />}
      {view === "Addrecepie" && <Add /> }
      <div></div>
    </div>
  );
}

export default App;
