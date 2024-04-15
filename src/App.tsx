import React from "react";
import AddTodo from './Component/AddTodo';
import ListOfData from './Component/ListOfData'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{display:"flex",flexDirection:"column"}}>
        <nav>
          <ul>
            <li style={{textDecoration:"none",color:"#03B5AA",fontSize:"18px",marginBottom:"20px"}}>
              <Link to="/" style={{textDecoration:"none",color:"#03B5AA",fontSize:"18px"}}>List of data</Link>
            </li>
            <li  style={{textDecoration:"none",color:"#03B5AA",fontSize:"18px"}}>
              <Link to="/add-data" style={{textDecoration:"none",color:"#03B5AA",fontSize:"18px"}}>Add data</Link>
            </li>
           
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ListOfData />} />
          <Route path="/add-data" element={<AddTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
