import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./components/landingpage";

import Navbar from "./components/navbar";
import Hotellist from "./components/hotellist";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Landingpage />
              </>
            }
          />
          <Route
            path="/hotellist"
            element={
              <>
              <Navbar/>
              <Hotellist/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
