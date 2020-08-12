import React, { Component } from "react";
import Subject from "./subject.js";

export class Subjects extends Component {
  render() {
    return (
      <table
      // style={{
      //   padding: "0",
      //   margin: "0",
      // }}
      >
        <thead>
          {/* <td style={{ border: "2px solid black" }}>Subjects</td> */}
          {/* <td style={{ border: "2px solid black" }}></td> */}
          {/* <td style={{ border: "2px solid black" }}></td> */}
          {/* <td style={{ border: "2px solid black" }}></td> */}
          <td></td>
          <td></td>
        </thead>
        <tbody>
          {this.props.subjects.map((subject) => (
            <Subject
              key={subject.id}
              subject={subject}
              onLectureAttendedIncrement={this.props.onLectureAttendedIncrement}
              onLectureAttendedDecrement={this.props.onLectureAttendedDecrement}
              onLectureNotAttendedIncrement={
                this.props.onLectureNotAttendedIncrement
              }
              onLectureNotAttendedDecrement={
                this.props.onLectureNotAttendedDecrement
              }
            ></Subject>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Subjects;
