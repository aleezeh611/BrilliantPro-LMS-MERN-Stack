import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ViewCourses() {
  const [getMessage,setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:8086/getCourses').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })
  
  }, [])

  return (
    <div className="App">
      {getMessage.status === 200 ?<p>
        {getMessage.data.map((item, i) => { return<table style={{width:"100%"}}>
        <tbody>
            <tr>
              <th>{item.CourseID}</th>
              <th>{item.CourseName}</th>
              <th>{item.CourseOverview}</th>
              <th>{item.Deadline}</th>
              <th>{item.Fee}</th>
            </tr>
        </tbody>
          </table>
        })}      
        </p>:
           <p>NO ITEM</p>
        } 
    </div>
  );
}

export default ViewCourses;
