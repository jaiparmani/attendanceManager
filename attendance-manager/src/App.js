import React, { Component } from "react";

import "./index.css";
import Navigation from "./components/Navigation";
import Subjects from "./components/subjects.js";
import Login from "./components/login.js";

export class App extends Component {
  state = {
    subjects: [
      {
        id: "Math",
        name: "Math",
        noOfLecturesAttended: 8,
        noOfLecturesNotAttended: 10,
        totalNoOflectures: 18,
      },
      {
        id: "English",
        name: "English",
        noOfLecturesAttended: 8,
        noOfLecturesNotAttended: 10,
        totalNoOflectures: 18,
      },
    ],
    subjects1: [],
    loggedIn: 0,
    data: [],
  };
  // For setting the state in the start
  constructor(props) {
    super(props);
    this.fetchSubjects = this.fetchSubjects.bind(this);
  }

  componentWillMount() {
    this.fetchSubjects();
  }

  fetchSubjects() {
    console.log("Fetching the subjects");

    fetch("http://127.0.0.1:8000/subject-list/username=admin12345/")
      .then((response) => response.json())
      .then((data) => this.setState({ subjects: data }));
  }

  handleLectureAttendedIncrement = (id) => {
    // const subjects = this.state.subjects.map((subject) => subject.id === id ? function () {
    //   subject.noOfLecturesAttended += 1;
    //   return subject
    // }() : subject)
    // this.setState({ subjects: subjects })

    const url =
      "http://127.0.0.1:8000/subject-update/user_id=1/subject_id=" + id;
    // .then(response => response.json())
    //   .then(data => this.setState({ subjects: data }))
    console.log(url);
    //  let hi=()=> {
    //   for (var i in this.state.subjects) {
    //     if (this.state.subjects[i].id == id)
    //     console.log(i)
    //         // i.noOfLecturesAttended = i.noOfLecturesAttended + 1
    //   }
    //   }

    // hi()
    let function1 = () => {
      for (var i in this.state.subjects) {
        if (this.state.subjects[i].id == id) {
          this.state.subjects[i].noOfLecturesAttended =
            this.state.subjects[i].noOfLecturesAttended + 1;
          return this.state.subjects[i].noOfLecturesAttended;
        }
      }
    };
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subjectId: id,
        user: 1,
        noOfLecturesAttended: function1(),
        noOfLecturesNotAttended: 10,
        subjectName: "AdminsSubjectAgain",
      }),
    })
      .then((response) => this.fetchSubjects())
      .catch((error) => console.log(error));
    // )
    this.fetchSubjects();
  };

  handleLectureAttendedDecrement = (id) => {
    const subjects = this.state.subjects.map((subject) =>
      subject.id === id
        ? (function () {
            subject.noOfLecturesAttended -= 1;
            return subject;
          })()
        : subject
    );
    this.setState({ subjects: subjects });
  };
  handleLectureNotAttendedIncrement = (id) => {
    const subjects = this.state.subjects.map((subject) =>
      subject.id === id
        ? (function () {
            subject.noOfLecturesNotAttended += 1;
            return subject;
          })()
        : subject
    );
    this.setState({ subjects: subjects });
  };
  handleLectureNotAttendedDecrement = (id) => {
    const subjects = this.state.subjects.map((subject) =>
      subject.id === id
        ? (function () {
            subject.noOfLecturesNotAttended -= 1;
            return subject;
          })()
        : subject
    );
    this.setState({ subjects: subjects });
  };
  forLoop = () => {
    let subjects = [];
    for (var i in this.state.data) {
      for (var j in this.state.data[i]) {
        // Conclusion
        //  when i =0, USER
        // rest SUBJECTS
        if (i == 0) {
          // console.log("USER:")
          // console.log(this.state.data[i][j])
        } else {
          // console.log("SUBJECTS")
          // console.log(this.state.data[i][j])
          subjects = this.state.data[i][j];
        }
      }
    }
    this.setState({ subjects1: subjects });
    // console.log("subjects")

    console.log(subjects);
    return subjects;
  };

  fun = (user) => {
    // console.log(user)
    for (var i in user) {
      // console.log(user[i])
    }
  };

  handleLogin = () => {
    console.log("Hellop ");
  };
  handleRegister = () => {
    console.log("Hellop ");
  };

  render() {
    return (
      <div>
        {this.state.data.map((user) => (
          <p>
            {(function () {
              for (var i in user) {
                let user = "";
                for (var j in user[i]) {
                  user += user[i][j];
                  console.log(j);
                }
                console.log(user);
                return user;
              }
            })()}
          </p>
        ))}{" "}
        <Navigation />
        <div className="jumbotron">
          {this.state.loggedIn === 1 && (
            <Subjects
              subjects={this.state.subjects}
              onLectureAttendedIncrement={this.handleLectureAttendedIncrement}
              onLectureAttendedDecrement={this.handleLectureAttendedDecrement}
              onLectureNotAttendedIncrement={
                this.handleLectureNotAttendedIncrement
              }
              onLectureNotAttendedDecrement={
                this.handleLectureNotAttendedDecrement
              }
              handleLogin={this.onLogin}
              handleRegister={this.onRegister}
            />
          )}
          {this.state.loggedIn === 0 && <Login />}
        </div>
      </div>
    );
  }
}

export default App;
