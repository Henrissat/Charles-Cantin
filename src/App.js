import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/UI/Layout";

import Home from "./components/Home/Index";
import Galery from "./components/Galery/Index";
import Price from "./components/Price/Index";
import Contact from "./components/Contact/Index";
import Admin from "./components/Admin/Index";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Galery />} path="/Galery" ></Route>
          <Route element={<Price />} path="/price"></Route>
          <Route element={<Contact />} path="/contact"></Route>
          <Route element={<Admin />} path="/admin"></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

