import React, { useState } from 'react';
import Navbar from '../componets/Navbar'
import './styles/home.css'

function Home({tareas, handleStatus}) {



    return (
        <div className="bg">
        <Navbar/>

            <h1>TAREAS POR HACER</h1>

           { tareas.length > 0 &&
           tareas.map((obj, index)=>{
               if(obj.status === "todo"){
                   return(
                       <div className="task">
                            <h3>{obj.name}</h3>
                            <button onClick={() => handleStatus("todo", index)}>por hacer</button>
                            <button onClick={() => handleStatus("inprogress", index)}>en progreso</button>
                            <button onClick={() => handleStatus("done", index)}>realizada</button>
                        </div>
                   )
               }
           })}

           
        </div>
    );
}

export default Home;