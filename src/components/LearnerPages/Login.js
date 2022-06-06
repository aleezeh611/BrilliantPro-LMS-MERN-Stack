import styles from '../../stylesheets/startpage.module.scss'
import '../../stylesheets/fontstyles.scss';
import React, { useState} from 'react';


function Login() {
    const [username, setusername] = useState("");
    const [pass, setpass] = useState("");

  return (
      <div className={styles.formbox}>
        <button className={styles.btnprimary}><a href ="/" >Go Back</a></button>
        <center><loginheading>Login</loginheading></center>

        <form >
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
      <center><input type="submit" value = "Login" className={styles.loginbtn}/></center>
      </form>
        <center><heading2><a href = "/RegisterLearner">Not a user? Create a new account</a></heading2></center>
      </div>

  );
}

export default Login;