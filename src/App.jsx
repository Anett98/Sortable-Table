import { createContext, useEffect, useState } from "react";
import Data from "./data.json";
import HomePage from "./Components/HomePage";
import CreatUser from "./Components/CreateUser";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export const Context = createContext();
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("initialData")) {
      setData(JSON.parse(localStorage.getItem("initialData")));
    } else {
      localStorage.setItem("initialData", JSON.stringify(Data));
    }
  }, []);

  return (
    <Context.Provider value={{ data, setData }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CreateUser" element={<CreatUser />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
