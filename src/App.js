import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [getMessage,setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:8086/getVehicles').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })
  
  }, [])

  return (
    <div className="App">
      {getMessage.status === 200 ?<p>
        {getMessage.data.map((item, i) => { return<div>
          <table style={{width:"100%"}}>
            <tr>
              <th>{item.title}</th>
              <th style = {{textAlign:"right", padding:"10px"}}><right>Rs.{item.price}</right></th>
            </tr>
            <tr>
              <th>Qnty: {item.location}</th>
              <th style = {{textAlign:"right"}}><button>BUTTON</button></th>
            </tr>
          </table>
        </div>
        })}      
        </p>:
           <p>NO ITEM</p>
        } 
    </div>
  );
}

export default App;
