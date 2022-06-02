import React, {useEffect, useState} from 'react';
import styles from '../../stylesheets/startpage.module.scss'
import axios from 'axios';
import '../../stylesheets/fontstyles.scss';
import MenuBar from '../menubar';

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
    <div>
    <MenuBar/>
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
