import React, {useEffect, useState} from 'react';
import styles from '../../../stylesheets/coursepages.module.scss'
import axios from 'axios';
import '../../../stylesheets/fontstyles.scss';
import MenuBar from '../../menubar';
import CustomPopup from '../../LearnerPages/CustomPopup.jsx'

function ViewDetails() {
  const [coursedetails, setCourseDetails] = useState({})
  const [visibility, setVisibility] = useState(false);
 
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  useEffect(()=>{
    axios.get('http://localhost:8086/getCourseDetails').then(response => {
      console.log("SUCCESS", response)
      setCourseDetails(response)
    }).catch(error => {
      console.log(error)
    })
  
  }, [])

  return (
    <div className={styles.outterboxcourses}>
      <MenuBar/>
      <div className={styles.outterbox}>
          <button className={styles.detailsbtn} onClick={(e) => setVisibility(!visibility)}>View Details</button>
          <table className={styles.tablestyle}>
          <tr style = {{display : "flex"}}><div className={styles.innertabbox1}>Material And Assessments</div>
          <div className={styles.innertabbox2}><a href = "/CourseSettings">Settings</a></div>
          <div className={styles.innertabbox3}>Users</div></tr>
          <tr style = {{display : "flex"}}>
          <div className={styles.displaybox1}>Actively Enrolled</div>
          <div className={styles.displaybox2}>Started Course</div>
          <div className={styles.displaybox3}>50% Through</div>
          </tr>
          <tr style = {{display : "flex"}}>
          <div className={styles.displaybox4}>Passed %</div>
          <div className={styles.displaybox5}>Failed %</div>
          </tr>
          </table>
      </div>
      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Course Details"
        >
        {/* {coursedetails.status === 200 ?<h3>{coursedetails.data.CourseID}</h3>:<h3>Invalid Data</h3>} */}
        {coursedetails.status === 200 ?<h3>
        {coursedetails.data.map((item, i) => { return  <div>
          <div> <h4>Course ID: </h4>{item.CourseID}</div>
          <div> <h4>Name:  </h4> {item.CourseName}</div>
          <div> <h4>Overview: </h4> {item.CourseOverview}</div>
          <div> <h4>Fee: </h4> {item.Fee}</div>
          <div> <h4>Deadline: </h4> {item.Deadline}</div>
        </div>
        })}      
        </h3>:
           <h3>NO ITEM</h3>
        } 
        </CustomPopup>
    </div>
  );
}
export default ViewDetails;