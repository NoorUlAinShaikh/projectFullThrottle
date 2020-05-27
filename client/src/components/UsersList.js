import React from "react";
import "../styles/UsersList.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser_s } from "../actions/index";
import {
  ALL_AVAILABLE_USERS,
  TIMEZONE,
  ACTIVITY_COUNT,
} from "../helpers/constants";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUser_s();
  }

  renderUsers = () => {
    return this.props.users.map((user) => {
      return (
        <div className="item" key={user.id}>
          <i
            style={{ color: "gainsboro" }}
            className="large middle aligned icon user"
          />
          <div className="content">
            <Link
              style={{ cursor: "pointer", padding: "7px 0" }}
              to={`/users/activity/${user.id}`}
            >
              {user.real_name}
            </Link>
            <div style={{ margin: "5px 0" }} className="description">
              {`${ACTIVITY_COUNT} `}
              {user.activity_periods.length}
              <div style={{ margin: "5px 0" }}>
                {`   ${TIMEZONE} `}
                {user.tz}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui red ribbon label">{ALL_AVAILABLE_USERS}</div>
        <div className="ui inverted relaxed divided list">
          {this.renderUsers()}
        </div>
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
