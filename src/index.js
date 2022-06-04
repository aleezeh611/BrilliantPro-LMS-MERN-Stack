import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StartPage from './components/StartPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewCourses from './components/CoursePages/ViewCourses';
import AdminDash from './components/AdminDash';
import Navigation from './components/Navigation';
import AddCourse from './components/CoursePages/AddCourse';
import ViewDetails from './components/CoursePages/ViewDetails';


function Greeting(props) {
  const curr_path = props.curr_path;
  if (curr_path === "/" || curr_path === "/StartPage") {
    return   <Router>
      <Routes>
        <Route path='/' element={<StartPage/>} />
        <Route path='/StartPage' element={<StartPage/>} />
      </Routes>
    </Router>;
  }
  return <Router>
    <Navigation/>
    <Routes>
    <Route path='/ViewCourses' element={<ViewCourses/>} />
    <Route path = '/AdminDash' element={<AdminDash/>} />
    <Route path = '/AddCourse' element={<AddCourse/>} />
    <Route path = '/ViewDetails' element={<ViewDetails/>} />
    </Routes>
  </Router>;
}

ReactDOM.render(
  <Greeting curr_path={window.location.pathname} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
