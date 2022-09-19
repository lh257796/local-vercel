import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";

function App() {
  const {pathname} = useLocation();

  return (
    <div>
      <h1> Apple Healthcare Directory </h1>
      <nav>
        <Link to='/' className={pathname === '/' ? 'selected' : ''}> Main </Link>
        <Link to='/patients' className={pathname === '/patients' ? 'selected' : ''}> Patients </Link>
        <Link to='/providers' className={pathname === '/providers' ? 'selected' : ''}> Providers </Link>
        <Link to='/news' className={pathname === '/news' ? 'selected' : ''}> News </Link>
        <Link to='/contact' className={pathname === '/contact' ? 'selected' : ''}> Contact Us </Link>
      </nav>
      <p>
        TESTING TIME.
      <img src={process.env.PUBLIC_URL + "/pic2.jpeg"} alt="Get_fucked"/>
      {/* <img src={process.env.PUBLIC_URL + "/pic1.jpeg"} alt="Get_fucked"/> */}

      </p>
    </div>

  );
}



export default App;
