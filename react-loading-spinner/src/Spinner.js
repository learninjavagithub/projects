import React from "react";
import LoadingSpinner from "./widgets/LoadingSpinner.js";
import { Link } from "react-router-dom";
import logo from "./logo.png";

class Spinner extends React.Component {
  
  render() {
    return (
      <React.Fragment>
      	<div style={{ textAlign: "center" }}>
          <p/>
		      <img src={logo} style={{ maxWidth:"50px", height: "50px"}} alt="logo" />
          <h2>
      			<b>If you have configured the app correctly, you should see a loading spinner 
            in the middle of the screen below:</b>
        	</h2>
          <li>
            Navigate to <Link to="/spinner-with-overlay" replace={true}>Spinner with Overlay Example</Link>
          </li>
          <header className="App-header" style={{ backgroundColor: "#ffffff" }}>
            <LoadingSpinner />
          </header>
      	</div>
      </React.Fragment>
    );
  }
}

export default Spinner;