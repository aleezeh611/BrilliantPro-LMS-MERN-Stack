import React from 'react';
import backimg from './graphics/mainback.png';
import styles from '../stylesheets/startpage.module.scss';
import '../stylesheets/fontstyles.scss';
import logo from './graphics/logo.png';

function StartPage() {
  return (
    <div className={styles.align}>
        <div className = {styles.welcomebox}>
        <heading1>Welcome To</heading1>
        <div><img src = {logo} alt = "logo" width = "220px" height= "200px"/></div>
        <br/>
        <heading2>Are you an</heading2><br/>
        <button className={styles.startbtn}><a href ="/AdminDash" >Administrator</a></button><br/>
        <heading2>Or a</heading2><br/>
        <button className={styles.startbtn}><a href = "/Login">Learner</a></button>
        </div>
        <img src = {backimg} alt = "background" width = "70%" height="690px"/>
    </div>
  );
}

export default StartPage;
