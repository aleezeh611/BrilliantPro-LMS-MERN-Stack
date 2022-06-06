import React, {useEffect, useState} from 'react';
import styles from '../../../stylesheets/learnerspages.module.scss'
import '../../../stylesheets/fontstyles.scss';
import MenuBar from '../../menubar';

function ViewCertificates() {
  return (
    <div className={styles.outterboxcourses}>
        <MenuBar/>
      <div className={styles.contentbox}>
      <table className={styles.tablestyle}>
      <tr><td>Certificate Of Completion</td>
          <td>Areesha Tahir</td>
          <td><button className={styles.searchbtn}>View Details</button></td></tr>

          <tr><td>Certificate Of Completion</td>
          <td>Aleezeh Usman</td>
          <td><button className={styles.searchbtn}>View Details</button></td></tr>
        </table>    
      </div>
    </div>
  );
}
export default ViewCertificates;