
import logo from "./logo.svg";
import "./App.css";
import img1 from "./chems.jpg";
import { useEffect, useState } from "react";

function App() {
  let comidas = [
    { id: 0, nombre: "quinua con atun y arroz" },
    { id: 1, nombre: "lentejas con arroz" },
    { id: 2, nombre: "crema de arveja" },
    { id: 3, nombre: "locro" },
    { id: 4, nombre: "ensalada rusa" },
    { id: 5, nombre: "estofado de pollo" },
    { id: 6, nombre: "guiso de trigo" },
    { id: 7, nombre: "pepian de choclo con atun" },
    { id: 8, nombre: "saltado de verduras" },
    { id: 9, nombre: "olluco con carne" },
  ];

  const filtroinicial=comidas.filter((u) => u.id < 6)
  
  const [comidasuno,Setcomidasuno]=useState(filtroinicial)

 const sortear=() => {

  const  sortcomidas = comidas.sort(() => Math.random() - 0.5)
    Setcomidasuno(sortcomidas.filter((u) => u.id < 6))
 }

 
 

  
  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "/" +
    date.getFullYear();


   

  return (
    <div className="App" >
      
     
        <div className="texto col-md-12 col-sm-12" >
            <h1 className="text-primary" >Menu semanal </h1>
            <h5>{output}</h5>
        </div>

       
    

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
          <div className="table-responsive-sm"> 
            <table className="table" >
              <thead>
                <tr>
                  <th scope="col">LUNES</th>
                  <th scope="col">MARTES</th>
                  <th scope="col">MIERCOLES</th>
                  <th scope="col">JUEVES</th>
                  <th scope="col">VIERNES</th>
                  <th scope="col">SABADO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    comidasuno.map((u,i)=>
                      <th key={i} scope="row">{u.nombre}</th>
                      )
                  }
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>


      <div>
      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={sortear}>Sortear</button>
          <div>

            <img src={img1} className="imgchems"/>
          </div>
      </div>
    </div>
  );
}

export default App;
