import React, {useEffect, useState} from 'react';
import styles from '../stylesheets/startpage.module.scss'
import axios from 'axios';
import '../stylesheets/fontstyles.scss';
import MenuBar from './menubar';
import Navigation from './Navigation'; 

function ViewDetails() {
  return (
    <div>
      <Navigation/>
      <MenuBar/>
      <div className={styles.outterbox}>
          <div className={styles.innertabbox1}>
            Material And Assessments
          </div>
          <div className={styles.innertabbox2}>Settings</div>
          <div className={styles.innertabbox3}>Users</div>
          <div className={styles.displaybox1}>Actively Enrolled</div>
          <div className={styles.displaybox2}>Started Course</div>
          <div className={styles.displaybox3}>50% Through</div>
          <div className={styles.displaybox4}>Passed %</div>
          <div className={styles.displaybox5}>Failed %</div>


      </div>
    </div>
  );
}
export default ViewDetails;