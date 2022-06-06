import styles from '../../stylesheets/startpage.module.scss'
import '../../stylesheets/fontstyles.scss';
import React, { useState} from 'react';
import axios from 'axios';

function RegisterLearner() {
    const [username, setusername] = useState("");
    const [pass, setpass] = useState("");
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("");

    const handleSubmit = () => {

        axios.post('http://localhost:8086/RegisterLearner?username='+username+"&name="+name+"&pass="+pass+"&contact="+contact)
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    }

  return (
      <div className={styles.formbox}>
       <button className={styles.btnprimary}><a href ="/" >Go Back</a></button>
        <center><loginheading>Create A New Account</loginheading></center>
        <form onSubmit={handleSubmit}>
      <table className={styles.tablestyle}>
      <tr>
        <td style={{width:"15%"}}>
          <formlabelslogin>Name: </formlabelslogin> 
        </td>
        <td>
          <input className={styles.searchform}
            type="text" 
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </td>
        </tr>
        <tr>
        <td style={{width:"15%"}}>
          <formlabelslogin>Contact: </formlabelslogin> 
        </td>
        <td>
          <input className={styles.searchform}
            type="text" 
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          />
        </td>
        </tr>
      <tr>
        <td style={{width:"15%"}}>
          <formlabelslogin>Username: </formlabelslogin> 
        </td>
        <td>
          <input className={styles.searchform}
            type="text" 
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </td>
        </tr>
        <tr>
        <td>
         <formlabelslogin>Password: </formlabelslogin>
        </td>
        <td> 
          <input className={styles.searchform}
            type="text" 
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
        </td>
        </tr>
      </table>
      <center><input type="submit" value = "Create Account" className={styles.loginbtn}/></center>
      </form>
      </div>

  );
}

export default RegisterLearner;