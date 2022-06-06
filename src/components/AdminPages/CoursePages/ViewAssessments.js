import React, {useEffect, useState} from 'react';
import styles from '../../../stylesheets/learnerspages.module.scss'
import '../../../stylesheets/fontstyles.scss';
import MenuBar from '../../menubar';

function ViewAssessments() {
  return (
    <div className={styles.outterboxcourses}>
        <MenuBar/>
      <div className={styles.contentbox}>
      <table className={styles.tablestyle}>
      <tr><td>CS209</td>
          <td>Assignment 1</td>
          <td><button className={styles.searchbtn}>View Details</button></td></tr>

          <tr><td>CS219</td>
          <td>Assignment 2</td>
          <td><button className={styles.searchbtn}>View Details</button></td></tr>

          <tr><td>MG209</td>
          <td>Assignment 1</td>
          <td><button className={styles.searchbtn}>View Details</button></td></tr>

          <tr><td>CS309</td>
          <td>Assignment 3</td>
          <td><button className={styles.searchbtn}>View Details</button></td></tr>
        </table>    
      </div>
    </div>
  );
}
export default ViewAssessments;