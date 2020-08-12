import React, { Component } from "react";
import "../index.css";

export class Subject extends Component {
  render() {
    return (
      <React.Fragment>
        <tr
          style={{
            border: "2px solid black",
          }}
        >
          <td style={{ paddingRight: "10px" }}>
            <strong>{this.props.subject.subjectName}</strong>
          </td>
          <td style={{ paddingRight: "10px" }}>
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                this.props.onLectureNotAttendedDecrement(this.props.subject.id)
              }
            >
              -
            </button>
            {this.props.subject.noOfLecturesNotAttended}
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                this.props.onLectureNotAttendedIncrement(this.props.subject.id)
              }
            >
              +
            </button>

            <br />
            <button
              className="btn btn-warning btn-sm"
              onClick={() =>
                this.props.onLectureAttendedDecrement(this.props.subject.id)
              }
            >
              -
            </button>
            {this.props.subject.noOfLecturesAttended}
            <button
              className="btn btn-success btn-sm"
              style={{ padding: "5px", margin: "10px" }}
              onClick={() =>
                this.props.onLectureAttendedIncrement(this.props.subject.id)
              }
            >
              +
            </button>
          </td>
          <td>
            <button
              className="btn btn-warning btn-sm"
              style={{ color: "white", background: "red" }}
            >
              -
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Subject;
