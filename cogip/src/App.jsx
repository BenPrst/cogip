import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Companies from "./pages/Companies.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
