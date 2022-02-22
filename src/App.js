import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import InProgress from './pages/InProgress';
import Done from './pages/Done';

import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
// import Formulario from './componets/Formulario';

function App() {

  const [tareas, setTareas] = useState(
    [
      {
        name: "dentis",
        status: "todo"
      },
      {
        name: "dentis",
        status: "todo"
      },
      {
        name: "go to the car wash",
        status: "todo"
      },
      {
        name: "run",
        status: "todo"
      }
    ]
  );
  const handleStatus = (status, index) => {
    setTareas(
      // ...tareas,
      tareas.map((obj, i) => {
        if(i === index){
          return{
            ...obj,
            status: status
          };
        }else{
          return obj;
        }
      })
    )
  }

  return (
    <Routes>
        <Route path="/tareas" element={<Home tareas={tareas} handleStatus={handleStatus}/>} />
        <Route path="/enprogreso" element={<InProgress tareas={tareas} handleStatus={handleStatus}/>} />
        <Route path="/realizadas" element={<Done tareas={tareas} handleStatus={handleStatus}/>} />
    </Routes>
  );
}

export default App;
