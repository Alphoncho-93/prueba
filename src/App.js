import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import Axios from 'axios';


function App() {

const [data, setData]=useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await Axios({
        url: "https://api.datos.gob.mx/v1/condiciones-atmosfericas",
      });

      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, [setData]);


const renderTable = () => {
  if(data!=null){
  return data.map(data => {
    return (
      <tr>
        <td>{data._id}</td>
        <td>{data.cityid}</td>
        <td>{data.name}</td> 
        <td>{data.state}</td> 
        <td>{data.probabilityofprecip}</td> 
        <td>{data.relativehumidity}</td> 
        <td>{data.lastreporttime}</td> 
        <td>{data.skydescriptionlong}</td> 
      </tr>
    )
  })
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <table id="coties"> 
          <thead>
            <tr>
              <th>_id</th>
              <th>cityId</th>
              <th>name</th>
              <th>state</th>
              <th>probabilityofprecip</th>
              <th>relativehumidity</th>
              <th>lastreporttimeformat</th>
              <th>llueve</th>
            </tr>
          </thead>
          <tbody>{data!=null? renderTable(): "Cargando.."}</tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
