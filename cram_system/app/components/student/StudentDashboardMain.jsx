var React = require('react');

var StudentBasicInfo = require('StudentBasicInfo');
var StudentNotes = require('StudentNotes');
var StudentStudyInfo = require('StudentStudyInfo');
var StudentMealsInfo = require('StudentMealsInfo');
var StudentCourseInfo = require('StudentCourseInfo');

class StudentDashboardMain extends React.Component {
  constructor() {
    super();

    this.state = {
      student_id: [],
      updated_at: [],
    }
  }

  componentWillMount() {
    this.setState({
      student_id: localStorage.getItem("student_id"),
    });
  }

  componentDidMount() {

  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div className="row"> <h3 style={hStyle}>Student DashBoard</h3></div>
        <div className="row">
          <div className="col-sm-6">
            <StudentBasicInfo
              student_id={this.state.student_id}
            />
          </div>
          <div className="col-sm-6">
            <StudentNotes />
          </div>
        </div>
        <div className="row"><div className="col-sm-12"><StudentStudyInfo student_id={this.state.student_id}/></div></div>
        <div className="row"><div className="col-sm-12"><StudentMealsInfo student_id={this.state.student_id}/></div></div>
        <div className="row"><div className="col-sm-12"><StudentCourseInfo /></div></div>
        <div className="row"><div className="col-sm-12"><StudentCourseInfo /></div></div>
        <div className="row"><div className="col-sm-12"><StudentCourseInfo /></div></div>
        <div className="row"><div className="col-sm-12"><StudentCourseInfo /></div></div>
        <div className="row"><div className="col-sm-12"><StudentCourseInfo /></div></div>
      </div>
    )
  }
}

module.exports = StudentDashboardMain;
