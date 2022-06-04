import React, {useEffect, useState} from 'react';
import styles from '../../stylesheets/coursepages.module.scss'
import axios from 'axios';
import '../../stylesheets/fontstyles.scss';
import MenuBar from '../menubar';

function ViewDetails() {
  return (
    <div className={styles.outterboxcourses}>
      <MenuBar/>
      <div className={styles.outterbox}>
            <table className={styles.tablestyle}>
          <tr style = {{display : "flex"}}><div className={styles.innertabbox1}>Material And Assessments</div>
          <div className={styles.innertabbox2}>Settings</div>
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
    </div>
  );
}
export default ViewDetails;