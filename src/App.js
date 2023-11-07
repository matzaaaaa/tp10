import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home";
import Header from "./components/Header.js";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>

            <Route index element={<Home />}></Route>


            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
