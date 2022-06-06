import React, {useEffect, useState} from 'react';
import styles from '../../stylesheets/coursepages.module.scss'
import '../../stylesheets/fontstyles.scss';
import MenuBar from '../menubar';

function ViewLearners() {
  return (
    <div className={styles.outterboxcourses}>
        <MenuBar/>
      <div className={styles.contentbox}>
      <table className={styles.tablestyle}>
      <tr><td>18I-1655</td>
          <td>Areesha Tahir</td>
          <td><button className={styles.searchbtn}>View</button></td></tr>

          <tr><td>18I-1655</td>
          <td>Areesha Tahir</td>
          <td><button className={styles.searchbtn}>View</button></td></tr>

          <tr><td>18I-1655</td>
          <td>Areesha Tahir</td>
          <td><button className={styles.searchbtn}>View</button></td></tr>

          <tr><td>18I-1655</td>
          <td>Areesha Tahir</td>
          <td><button className={styles.searchbtn}>View</button></td></tr>

          <tr><td>18I-1655</td>
          <td>Areesha Tahir</td>
          <td><button className={styles.searchbtn}>View</button></td></tr>

          <tr><td>18I-1655</td>
          <td>Areesha Tahir</td>
          <td><button className={styles.searchbtn}>View</button></td></tr>
        </table>    
      </div>
    </div>
  );
}
export default ViewLearners;