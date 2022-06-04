import styles from '../stylesheets/dashboards.module.scss';
import '../stylesheets/fontstyles.scss';
import courseimg from './graphics/coursesdash.png'
import learnersimg from './graphics/learnersdash.png'
import certificateimg from './graphics/certificatesdash.png'
import assessmentsdash from './graphics/assessmentsdash.png'
import materialsimg from './graphics/materialdash.png'
import React, {useEffect, useState} from 'react';
import axios from 'axios';



function AdminDash() {
    const [courseCount,setCourseCount] = useState({})
    const [learnerCount,setLearnerCount] = useState({})
    const [assessmentCount,setAssessmentCount] = useState({})
    const [materialCount,setMaterialCount] = useState({})
    const [certificateCount,setCertificateCount] = useState({})

    useEffect(()=>{
      axios.get('http://localhost:8086/getCourseCount').then(response => {
        console.log("SUCCESS", response)
        setCourseCount(response)
      }).catch(error => {
        console.log(error)
      })
    }, [])
    
    useEffect(()=>{
        axios.get('http://localhost:8086/getLearnersCount').then(response => {
          console.log("SUCCESS", response)
          setLearnerCount(response)
        }).catch(error => {
          console.log(error)
        })
      }, [])

    useEffect(()=>{
        axios.get('http://localhost:8086/getAssessmentsCount').then(response => {
          console.log("SUCCESS", response)
          setAssessmentCount(response)
        }).catch(error => {
          console.log(error)
        })
      }, [])

    useEffect(()=>{
        axios.get('http://localhost:8086/getMaterialsCount').then(response => {
          console.log("SUCCESS", response)
          setMaterialCount(response)
        }).catch(error => {
          console.log(error)
        })
      }, [])
    useEffect(()=>{
        axios.get('http://localhost:8086/getCertificatesCount').then(response => {
          console.log("SUCCESS", response)
          setCertificateCount(response)
        }).catch(error => {
          console.log(error)
        })
      }, [])

  return (
    <div className={styles.outterbox}>
        <div className={styles.innerbox}><a href = '/ViewCourses'>
            <div className={styles.graphicbox1}>
                <img src = {courseimg} width = "200px" height= "300px"/>
            </div>
            <div className={styles.textbox1}>
            <heading1 style={{color: "white"}}>Courses</heading1>
            <heading2 style={{color: "white"}}>Total Active Courses: {courseCount.data}</heading2>
            </div>
        </a></div>
        <div className={styles.innerbox}>
            <div className={styles.graphicbox2}>
            <img src = {learnersimg} width = "170px" height= "330px"/>
            </div>
            <div className={styles.textbox2}>
            <heading1 style={{color: "white"}}>Learners</heading1>
            <heading2 style={{color: "white"}}>Total Active Learners: {learnerCount.data}</heading2>
            </div>
        </div>
        <div className={styles.innerbox}>
            <div className={styles.graphicbox3}>
                <img src = {certificateimg} width = "190px" height= "320px"/>
            </div>
            <div className={styles.textbox3}>
            <heading1 style={{color: "white"}}>Certificates</heading1>
            <heading2 style={{color: "white"}}>Certificates Distributed: {certificateCount.data}</heading2>
            </div>
        </div>
        <div className={styles.innerbox}>
            <div className={styles.graphicbox4}>
                <img src = {assessmentsdash} width = "230px" height= "330px"/>
            </div>
            <div className={styles.textbox4}>
            <heading1 style={{color: "white"}}>Assessments</heading1>
            <heading2 style={{color: "white"}}>Current Assessments: {assessmentCount.data}</heading2>
            </div>
        </div>
        <div className={styles.innerbox}>
            <div className={styles.graphicbox5}>
                <img src = {materialsimg} width = "190px" height= "330px"/>
            </div>
            <div className={styles.textbox5}>
            <heading1 style={{color: "white"}}>Materials</heading1>
            <heading2 style={{color: "white"}}>Total Uploaded Materials: {materialCount.data}</heading2>
            </div>
        </div>
    </div>
  );
}

export default AdminDash;
