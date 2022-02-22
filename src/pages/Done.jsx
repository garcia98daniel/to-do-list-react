import React from 'react';
import Navbar from '../componets/Navbar';

function Done({tareas, handleStatus}) {
    return (
        <div className="bg">
        <Navbar/>

            <h1>TAREAS REALIZADAS</h1>
           {tareas.length > 0 &&
           tareas.map((obj, index)=>{
               if(obj.status === "done"){
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

export default Done;