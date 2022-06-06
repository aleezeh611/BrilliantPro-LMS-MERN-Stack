import React, { useState} from 'react';
import styles from '../../stylesheets/coursepages.module.scss'
import axios from 'axios';
import '../../stylesheets/fontstyles.scss';
import MenuBar from '../menubar';

function ViewMaterials() {
  return (
    <div className={styles.outterboxcourses}>
        <MenuBar/>
      <div className={styles.contentbox}>
      <table className={styles.tablestyle}>
      <tr><td>Web Programming</td>
          <td>Lecture 2</td>
          <td><button className={styles.searchbtn}>View Details</button></td></tr>

          <tr><td>Cloud Computing</td>
          <td>Lecture 4</td>
          <td><button className={styles.searchbtn}>View Details</button></td></tr>
        </table>    
      </div>
    </div>
  );
}
export default ViewMaterials;