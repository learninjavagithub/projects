import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Import redux actions
import {
  getUser,
  addUser,
  delUser
} from "./actions/UserAction.js";

class User extends React.Component {
  
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      stateUser: {}
    };
  }

  handleChange = event => {
    let userTmp = Object.assign({}, this.props.data);
    userTmp[event.target.name] = event.target.value;
    userTmp.timestamp = new Date();
    this.props.addUser(userTmp);
  };

  handleClear = () => {
    this.props.delUser();
  };

  render() {
    return (
      <React.Fragment>
      	<div style={{ textAlign: "center" }}>
      		This is the User screen
      		<li>
      			Navigate to <Link to="/" replace={true}>Dashboard</Link>
        	</li>
          <p />
          <label htmlFor="firstName">First Name</label>&nbsp;
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={this.handleChange}
            value={this.props.data.firstName}
          />
          <p />
          <label htmlFor="lastName">Last Name</label>&nbsp;
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={this.handleChange}
            value={this.props.data.lastName}
          />
          <p />
          <input
            type="button"
            name="Clear"
            value="Clear"
            onClick={this.handleClear}
          />
          <p />
          <h3>User from Redux Store</h3>
          First Name: {this.props.data.firstName}
          <p />
          Last Name: {this.props.data.lastName}
          <p />
      	</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.main.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUser,
      addUser,
      delUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);