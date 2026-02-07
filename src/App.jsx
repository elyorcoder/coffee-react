import React from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Info from "./components/ui/info";
import Intro from "./components/ui/intro";
import What from "./components/ui/what";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Info />
      <Intro />
      <What />
      <Footer />
    </div>
  );
};

export default App;