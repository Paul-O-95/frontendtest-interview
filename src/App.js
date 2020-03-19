import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Team from "./components/Team";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
