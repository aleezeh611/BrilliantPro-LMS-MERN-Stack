import React, {useEffect, useState} from 'react';
import styles from '../../stylesheets/coursepages.module.scss'
import '../../stylesheets/fontstyles.scss';
import MenuBar from '../menubar';
import CustomPopup from '../LearnerPages/CustomPopup';
import certificate from "../graphics/certificates/aleezeh0529CS001.png";

function ViewCertificates() {
    const [visibility, setVisibility] = useState(false);
 
    const popupCloseHandler = (e) => {
      setVisibility(e);
    };

  return (
    <div className={styles.outterboxcourses}>
        <MenuBar/>
      <div className={styles.contentbox}>
      <table className={styles.tablestyle}>
      <tr><td>Certificate Of Completion</td>
          <td>Areesha Tahir</td>
          <td><button className={styles.searchbtn} onClick={(e) => setVisibility(!visibility)}>View</button></td></tr>

          <tr><td>Certificate Of Completion</td>
          <td>Aleezeh Usman</td>
          <td><button className={styles.searchbtn} onClick={(e) => setVisibility(!visibility)} >View</button></td></tr>
        </table>    
      </div>
      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Here's your certificate!"
        >
        <center><img src = {certificate} width = "500px" height="400px"></img></center>
        </CustomPopup>
    </div>
  );
}
export default ViewCertificates;