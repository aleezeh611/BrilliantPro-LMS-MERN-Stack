import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StartPage from './components/StartPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewCourses from './components/ViewCourses';
import ViewDetails from './components/ViewDetails';


function Greeting(props) {
  return <Router>
    <Routes>
      <Route path='/' element={<StartPage/>} />
      <Route path='/ViewCourses' element={<ViewCourses/>} />
      <Route path='/ViewDetails' element={<ViewDetails/>}/>
    </Routes>
  </Router>;
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
