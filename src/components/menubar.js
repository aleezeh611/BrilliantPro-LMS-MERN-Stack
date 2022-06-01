import styles from '../stylesheets/startpage.module.scss'
import '../stylesheets/fontstyles.scss';

function MenuBar() {

  return (
      <div className = {styles.menubox}>
        <button className = {styles.menuitems}>Courses</button>
        <button className = {styles.menuitems}>Learners</button>
        <button className = {styles.menuitems}>Certificates</button>
        <button className = {styles.menuitems}>Assessments</button>
        <button className = {styles.menuitems}>Materials</button>
      </div>

  );
}

export default MenuBar;
