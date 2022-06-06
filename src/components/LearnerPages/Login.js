import styles from '../../stylesheets/startpage.module.scss'
import '../../stylesheets/fontstyles.scss';
import React, { useState} from 'react';
import axios from 'axios';

function Login() {
    const [username, setusername] = useState("");
    const [pass, setpass] = useState("");

    const handleSubmit = () => {

      axios.post('http://localhost:8086/StoreUsername?id='+username)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }

  return (
      <div className={styles.formbox}>
        <button className={styles.btnprimary}><a href ="/" >Go Back</a></button>
        <center><loginheading>Login</loginheading></center>

        <form onSubmit={handleSubmit}>
      <table className={styles.tablestyle}>
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
      <center><button className={styles.loginbtn}><a href ="/AdminDash" >Login</a></button></center>
      </form>
        <center><heading2><a href = "/RegisterLearner">Not a user? Create a new account</a></heading2></center>
      </div>

  );
}

export default Login;