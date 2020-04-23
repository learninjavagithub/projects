import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class User extends React.Component {
  
  render() {
    return (
      <React.Fragment>
      	<div style={{ textAlign: "center" }}>
      		This is the User screen
      		<li>
      			Navigate to <Link to="/" replace={true}>Dashboard</Link>
        	</li>
          <header className="App-header" style={{ backgroundColor: "#ffffff" }}>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
      	</div>
      </React.Fragment>
    );
  }
}

export default User;