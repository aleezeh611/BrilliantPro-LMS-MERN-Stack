import React, { useState} from 'react';
import styles from '../../stylesheets/coursepages.module.scss'
import axios from 'axios';
import '../../stylesheets/fontstyles.scss';
import MenuBar from '../menubar';

function AddCourse() {
  const [cid, setcid] = useState("");
  const [cname, setName] = useState("");
  const [coverview, setoverview] = useState("");
  const [cdeadline, setdeadline] = useState("");
  const [cimg, setimg] = useState("");
  const [cfee, setfee] = useState("");
  const [clink, setlink] = useState("");
  

  const handleSubmit = () => {

    axios.post('http://localhost:8086/AddCourse?id='+cid+"&name="+cname+"&overview="+coverview+"&deadline="+cdeadline+"&fee="+cfee+"&img="+cimg+"&link="+clink)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div className={styles.outterboxcourses}>
    <MenuBar/>
      <div className={styles.contentbox}>
      <form onSubmit={handleSubmit}>
      <table className={styles.tablestyle}>
      <tr>
        <td style={{width:"15%"}}>
          <formlabels>ID: </formlabels> 
        </td>
        <td>
          <input className={styles.searchform}
            type="text" 
            value={cid}
            onChange={(e) => setcid(e.target.value)}
          />
        </td>
        </tr>
        <tr>
        <td>
         <formlabels>Name: </formlabels>
        </td>
        <td> 
          <input className={styles.searchform}
            type="text" 
            value={cname}
            onChange={(e) => setName(e.target.value)}
          />
        </td>
        </tr>
        <tr>
        <td>
          <formlabels>Overview: </formlabels> 
        </td>
        <td >
          <input className={styles.searchform}
            type="text" 
            value={coverview}
            onChange={(e) => setoverview(e.target.value)}
          />
        </td>
        </tr>
        <tr>
        <td>
          <formlabels>Deadline: </formlabels> 
        </td>
        <td>
          <input className={styles.searchform}
            type="text" 
            value={cdeadline}
            onChange={(e) => setdeadline(e.target.value)}
          />
        </td>
        </tr>
        <tr>
        <td>
          <formlabels>Fee: </formlabels> 
        </td>
        <td>
          <input className={styles.searchform}
            type="text" 
            value={cfee}
            onChange={(e) => setfee(e.target.value)}
          />
        </td>
        </tr>
        <tr>
        <td>
          <formlabels>Image: </formlabels> 
        </td>
        <td>
          <input className={styles.searchform}
            type="text" 
            value={cimg}
            onChange={(e) => setimg(e.target.value)}
          />
        </td>
        </tr>
        <tr>
        <td>
          <formlabels>Enrollment Link: </formlabels> 
        </td>
        <td>
          <input className={styles.searchform}
            type="text" 
            value={clink}
            onChange={(e) => setlink(e.target.value)}
          />
        </td>
        </tr>
      </table>
      <input type="submit" value = "Add Course" className={styles.searchbtn}/>
      </form>
      </div> 
    </div>
  );
}

export default AddCourse;
