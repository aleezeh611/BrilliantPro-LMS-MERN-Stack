import styles from '../../stylesheets/dashboards.module.scss';
import '../../stylesheets/fontstyles.scss';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CustomPopup from './CustomPopup';
import certificate from "../graphics/certificates/aleezeh0529CS001.png";


function LearnerDash() {
    const [curruser,setUser] = useState({})
    const [coursedetails, setcoursedetails] = useState({})
    const [cert, setcert] = useState({})

    const [visibility, setVisibility] = useState(false);
 
    const popupCloseHandler = (e) => {
      setVisibility(e);
    };
    useEffect(()=>{
      axios.get('http://localhost:8086/getcurrentuser').then(response => {
        console.log("SUCCESS", response)
        setUser(response)
      }).catch(error => {
        console.log(error)
      })
    }, [])
    useEffect(()=>{
        axios.get('http://localhost:8086/getlearnercoursedetails').then(response => {
          console.log("SUCCESS", response)
          setcoursedetails(response)
        }).catch(error => {
          console.log(error)
        })
      }, [])

      useEffect(()=>{
        axios.get('http://localhost:8086/getusercertificate').then(response => {
          console.log("SUCCESS", response)
          setcert(response)
        }).catch(error => {
          console.log(error)
        })
      }, [])

  return (
    <div className= {styles.mostoutterbox}>
        <div style={{width:"70%", margin:"5%", marginLeft:"3%"}}>
        <heading1>Your Courses</heading1>
        {coursedetails.status === 200 ?<p>
        {coursedetails.data.map((item, i) => { 
            return ( 
                <div className={styles.learneroutterbox}> 
                {Object.entries(item.courses).map( ([key, value]) => {
                    return (
                        <div>
                            <div className={styles.learnerbox}>
                                <div>{key}</div><div>{value}</div>
                            </div>
                        </div>
                    );
                })}
                </div>
            );
        })}      
        </p>:
           <p>Learner Does Not Exist, Please Put in Correct Login Credentials</p>
        } 
        </div>

        <div style={{width:"70%", margin:"5%", marginLeft:"3%"}}>
        <heading1>Your Certificates</heading1>
        {cert.status === 200 ?<p>
        {cert.data.map((item, i) => { 
            return ( 
                <div className={styles.learneroutterbox}> 
                <div className={styles.certbox} onClick={(e) => setVisibility(!visibility)}>                {item.courseid}
                {item.date_recieved}</div>
                </div>
            );
        })}      
        </p>:
           <p>Learner Does Not Exist, Please Put in Correct Login Credentials</p>
        } 
        </div>
        <button onClick={(e) => setVisibility(!visibility)}>Toggle Popup</button>
 
        <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Here's your certificate!"
        >
        </CustomPopup>
        
    </div>
  );
}

export default LearnerDash;
