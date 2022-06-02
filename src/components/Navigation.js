import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './graphics/logo2.png';
import styles from '../stylesheets/startpage.module.scss'; 
import '../stylesheets/fontstyles.scss';

class Navigation extends Component {
    render() {
        return (
            <div className={styles.navbar}>
                <img className = {styles.logo} alt="logo" src={logo} width="90" height="70" />
                <title1 >Brilliant</title1><title2>Pro</title2>
                <navbar_item><Link to ='/StartPage'>LOG OUT</Link></navbar_item>
                <navbar_item><Link to='/'>HELP</Link></navbar_item>
                <navbar_item><Link to ='/AdminDash'>HOME</Link></navbar_item>
            </div>
        );
    }
}

export default Navigation;