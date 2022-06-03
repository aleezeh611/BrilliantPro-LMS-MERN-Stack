import React, {useEffect, useState} from 'react';
import styles from '../stylesheets/startpage.module.scss'
import axios from 'axios';
import '../stylesheets/fontstyles.scss';
import MenuBar from './menubar';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, Row} from 'react-bootstrap'; 
import course_png from './graphics/PF.png'

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
    <Navigation/>
    <MenuBar/>
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
                <div className={styles.btnprimary} >
                  <a href="#" class="Button">View Course</a>
                  </div>
                </Col>
              </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
        // <Container>
        //   <Row className="justify-content-md-center">
        //     <Col xs="3">{item.CourseID}</Col>
        //     <Col>{item.CourseName}</Col>
        //   </Row>
        // </Container>
        })}      
        </p>:
           <p>NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM NO ITEM</p>
        } 
    </div>
  );
}

export default ViewCourses;