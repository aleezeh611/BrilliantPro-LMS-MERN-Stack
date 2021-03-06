import React, {useEffect, useState} from 'react';
import styles from '../../../stylesheets/coursepages.module.scss'
import axios from 'axios';
import '../../../stylesheets/fontstyles.scss';
import MenuBar from '../../menubar';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, Row} from 'react-bootstrap'; 
import course_png from '../../graphics/PF.png'

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

  const sendCourseID = (id) => {
    axios.post('http://localhost:8086/StoreCourseIDforDetails?id='+id)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  
  return (
    <div className={styles.outterboxcourses}>
    <MenuBar/>
    <div className = {styles.contentbox}>
    <button className={styles.addbtn}><a href ="/AddCourse" >Add Course</a></button>
      {getMessage.status === 200 ?<p>
        {getMessage.data.map((item, i) => { return  <div class="container"> 
        <div className="justify-content-md-center">
        <div class="card">
          <div class="card bg-light text-dark">
            <div class="card-body">
              <Row>
                <Col xs="1"><img class= "card-img-top" src={course_png} alt="Card image"></img></Col>
                  <Col xs="3">{item.CourseID}</Col>
                <Col xs="6">{item.CourseName}</Col>
                <Col>
                <button className={styles.btnprimary} onClick={() => sendCourseID(item.CourseID)}><a href ="/ViewDetails" >View Details</a></button>
                </Col>
              </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
        })}      
        </p>:
           <p>NO ITEM</p>
        } 
    </div>
    </div>
  );
}

export default ViewCourses;