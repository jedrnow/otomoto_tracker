import "./Home.css";
import React from "react";
import Navigation from "./Navigation";

class Home extends React.Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <h1>Welcome to OtomotoTracker!</h1>
        <div id="container-home"></div>
      </>
    );
  }
}

export default Home;
