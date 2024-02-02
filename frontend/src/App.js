import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddCar from "./components/AddCar"
import Classic from "./components/Classic";
import Modern from "./components/Modern";
import AboutUs from "./components/AboutUs";
import CarDetails from "./components/CarDetails"
import Manufacturers from "./components/Manufacturers";

function App() {
  return (
    <div>
      <React.Fragment>
        <header>
          {/* <Navbar /> */}
        </header>
        <main>
          <Routes>
            <Route path = '/' element = {<Home />} exact/>
            <Route path = '/add' element = {<AddCar />} exact/>
            <Route path = '/oldcars' element = {<Classic />} exact/>
            <Route path = '/newcars' element = {<Modern />} exact/>
            <Route path = '/about' element = {<AboutUs />} exact/>
            <Route path = '/cars/:id' element = {<CarDetails />} exact/>
            <Route path = '/manufacturers' element = {<Manufacturers />} exact/>
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
