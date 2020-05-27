import React from "react";
import "../styles/UsersList.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser_s } from "../actions/index";
import { ALL_AVAILABLE_USERS } from "../helpers/constants";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUser_s();
  }

  renderUsers = () => {
    return this.props.users.map((user) => {
      return (
        <div className="item" key={user.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link
              style={{ cursor: "pointer" }}
              to={`/users/activity/${user.id}`}
            >
              {user.real_name}
            </Link>
            {/* <div className="description">{stream.description}</div> */}
          </div>
        </div>
      );
    });
  };

  componentWillUnmount() {
    console.log("userslist unmount");
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui red ribbon label">{ALL_AVAILABLE_USERS}</div>
        <div className="ui celled list">{this.renderUsers()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps, { fetchUser_s })(UsersList);
