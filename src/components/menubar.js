import styles from '../stylesheets/startpage.module.scss'
import '../stylesheets/fontstyles.scss';

function MenuBar() {

  return (
      <div className = {styles.menubox}>
        <button className = {styles.menuitems}><a href = "/ViewCourses">Course</a></button>
        <button className = {styles.menuitems}><a href = "/ViewLearners">Learners</a></button>
        <button className = {styles.menuitems}><a href = "/ViewCertificates">Certificates</a></button>
        <button className = {styles.menuitems}><a href = "/ViewAssessments">Assessments</a></button>
        <button className = {styles.menuitems}><a href = "/ViewMaterials">Materials</a></button>
      </div>

  );
}

export default MenuBar;
