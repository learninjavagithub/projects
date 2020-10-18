import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import Overlay from "./widgets/Overlay.js";

class SpinnerWithOverlay extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: true
    };    
  }

  handleShowOverlay = () => {
    this.setState({ showOverlay: false });
  };

  componentDidMount() {
    this.autoshowOverlay = setTimeout(
      function() {
        this.handleShowOverlay();
      }.bind(this),
      5000
    );
  }  
 
  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: "center" }}>
          <p/>
          <img src={logo} style={{ maxWidth:"50px", height: "50px"}} alt="logo" />
          <h2>
            <b>If you have configured the app correctly, on page load, you should see a loading spinner 
            with an overlay on the text, after 5 seconds, both spinner and overlay disappers</b>
          </h2>
          <li>
            Navigate to <Link to="/" replace={true}>Spinner Example</Link>
          </li>
        </div>
        <Overlay active={this.state.showOverlay} marginTop="150px">
        	<div style={{ textAlign: "center" }}>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
            <p>Some content to show that the overlay will be shown on this text and text will be disabled</p>
          </div>
        </Overlay>
      </React.Fragment>
    );
  }
}

export default SpinnerWithOverlay;