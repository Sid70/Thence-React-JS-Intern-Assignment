// Import necessary modules from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./widgets/Home";
import Register from "./widgets/Register";
import Success from './widgets/Success'


// Define your component with the router
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
