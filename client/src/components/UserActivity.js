import React from "react";
import Modal from "../Modal";
import history from "../history";
import { connect } from "react-redux";
import { fetchUser_s } from "../actions";
import moment from "moment";
import _ from "lodash";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  BACK_TO_USERS,
  START_TIME,
  END_TIME,
  DURATION,
  NO_ACTIVITY_RECORD,
} from "../helpers/constants";

class UserActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userActivity: null,
      currentDate: moment().format("LL"),
      showCal: false,
    };
    this.userId = this.props.match.params.id;
  }

  componentDidMount() {
    const { user, fetchUser_s } = this.props;
    //every component should be self sustaining and not be dependant on other component for data
    //check whether we have the user in redux store
    //if not, fire api call to db
    if (typeof user === "undefined") {
      fetchUser_s(this.userId);
    }
    if (user) {
      this.fireActivityConstruction();
    }
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      console.log("user updated!");
      this.fireActivityConstruction();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  fireActivityConstruction = () => {
    const userActivity = this.constructActivityPeriod(
      this.props.user.activity_periods
    );
    this.setState({ userActivity });
  };

  constructActivityPeriod = (activityPeriod = []) => {
    let date = "",
      startTime = "",
      endTime = "",
      duration = "";
    if (activityPeriod.length > 0) {
      const periods = activityPeriod.map((period) => {
        startTime = moment(this.sanitizeTime(period.start_time));
        endTime = moment(this.sanitizeTime(period.end_time));
        date = startTime.format("LL");
        duration = startTime.from(endTime, true);
        startTime = startTime.format("LTS");
        endTime = endTime.format("LTS");
        return { date, startTime, endTime, duration };
      });
      return _.mapKeys(periods, "date");
    }
  };

  sanitizeTime = (time = "") => {
    const spacePosition = time.includes("AM")
      ? time.lastIndexOf("AM")
      : time.lastIndexOf("PM");
    return `${time.slice(0, spacePosition)} ${time.slice(spacePosition)}`;
  };

  handleKeyDown = (e) => {
    //Esc pressed
    if (e.keyCode === 27) {
      this.hideCalender();
    }
  };

  handleCalendarDateChange = (date) => {
    this.setState({ currentDate: moment(date).format("LL") });
  };

  toggleCalendarView = () => {
    this.setState({ showCal: !this.state.showCal });
  };

  hideCalender = () => {
    if (this.state.showCal) this.setState({ showCal: false });
  };

  //content for the Modal
  renderModalAnatomy = () => {
    return (
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "10% 80%",
          justifyContent: "center",
          color: "#000000",
        }}
      >
        <div style={{ justifySelf: "center" }}>
          <i
            style={{ cursor: "pointer" }}
            className="big calendar alternate icon"
            onClick={this.toggleCalendarView}
          ></i>
          {this.state.showCal ? (
            <div style={{ position: "absolute" }}>
              <Calendar
                onChange={this.handleCalendarDateChange}
                value={new Date(this.state.currentDate)}
                calendarType="US"
              />
            </div>
          ) : null}
        </div>
        <div style={{ justifySelf: "center" }}>
          {this.state.userActivity &&
          this.state.userActivity[this.state.currentDate] ? (
            <table
              className="ui very basic celled collapsing table"
              style={{ color: "#000000", textAlign: "center" }}
            >
              <thead>
                <tr>
                  <th>{START_TIME}</th>
                  <th>{END_TIME}</th>
                  <th>{DURATION}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {this.state.userActivity[this.state.currentDate].startTime}
                  </td>
                  <td>
                    {this.state.userActivity[this.state.currentDate].endTime}
                  </td>
                  <td>
                    {`About ${
                      this.state.userActivity[this.state.currentDate].duration
                    }`}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div>{NO_ACTIVITY_RECORD}</div>
          )}
        </div>
      </div>
    );
  };

  //actions for the Modal
  renderModalActions = () => {
    return (
      <>
        <button
          onClick={() => history.push("/users")}
          style={{ fontFamily: "Kelly Slab" }}
          className="ui button"
        >
          {BACK_TO_USERS}
        </button>
      </>
    );
  };

  render() {
    return (
      <>
        {this.props.user ? (
          <Modal
            header={`${this.props.user.real_name} activity:  ${this.state.currentDate}`}
            content={this.renderModalAnatomy()}
            actions={this.renderModalActions()}
            onDismiss={() => history.push("/users")}
          />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = ({ users }, ownProps) => {
  return { user: users[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchUser_s })(UserActivity);
