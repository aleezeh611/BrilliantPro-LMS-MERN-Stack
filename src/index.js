import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StartPage from './components/StartPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewCourses from './components/ViewCourses';
import Navigation from './components/Navigation';


function Greeting(props) {
  const curr_path = props.curr_path;
  if (curr_path == "/") {
    return   <Router>
      <Routes>
        <Route path='/' element={<StartPage/>} />
      </Routes>
    </Router>;
  }
  return <Router>
    <Navigation/>
    <Routes>
    <Route path='/ViewCourses' element={<ViewCourses/>} />
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
