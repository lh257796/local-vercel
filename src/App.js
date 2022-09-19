import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Main from "./Main";
import Contact from "./Contact";
import Patients from "./Patients";
import Providers from "./Providers";
import News from "./News";

function App() {
  const {pathname} = useLocation();

  return (
    <div>
      <h1> Apple Health Industries </h1>
      <nav>
        <Link to='/' className={pathname === '/' ? 'selected' : ''}> MAIN </Link>
        <Link to='/patients' className={pathname === '/patients' ? 'selected' : ''}> PATIENTS </Link>
        <Link to='/providers' className={pathname === '/providers' ? 'selected' : ''}> PROVIDERS </Link>
        <Link to='/news' className={pathname === '/news' ? 'selected' : ''}> NEWS </Link>
        <Link to='/contact' className={pathname === '/contact' ? 'selected' : ''}> CONTACT US </Link>
      </nav>
      <Routes>
        <Route path='/' element = {<Main />}/>
        <Route path='/patients' element = {<Patients />}/>
        <Route path='/providers' element = {<Providers />}/>
        <Route path='/news' element = {<News />}/>
        <Route path='/contact' element = {<Contact />}/>

      </Routes>
      <footer>
        <p>
          <small>
        All Rights Reserved. Apple Inc. © Han 2022. Do not redistribute. Do not copy. Do not breathe, do not eat, do not blink. Do not go to the doctor.

          </small>
        </p>
      </footer>
    </div>

  );
}



export default App;
