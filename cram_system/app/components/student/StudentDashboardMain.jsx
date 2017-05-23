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
      courses: [],
      course_list: [],
      updated_at: [],
    }

    this.getSubject = this.getSubject.bind(this);
    this.getGrade = this.getGrade.bind(this);
    this.getDay = this.getDay.bind(this);
    this.getStudentCourses = this.getStudentCourses.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentWillMount() {
    this.setState({
      student_id: localStorage.getItem("student_id"),
    });
  }

  componentDidMount() {
    this.getStudentCourses();
  }

  getSubject(subject) {
    switch (subject) {
      case 'chinese': return '國文'
      case 'english': return '英文'
      case 'math': return '數學'
      case 'physics': return '物理'
      case 'chemistry': return '化學'
      case 'biology': return '生物'
      case 'earth_science': return '地科'
      case 'geography': return '地理'
      case 'history': return '歷史'
      case 'civil_ethics_education': return '公民'
      default: return 'no match'
    }
  }

  getGrade(grade) {
    switch (grade) {
      case '5': return '小五'
      case '6': return '小六'
      case '7': return '國一'
      case '8': return '國二'
      case '9': return '國三'
      case '10': return '高一'
      case '11': return '高二'
      case '12': return '高三'
      default: return 'no match'
    }
  }

  getDay(day) {
    switch (day) {
      case '1': return '星期一'
      case '2': return '星期二'
      case '3': return '星期三'
      case '4': return '星期四'
      case '5': return '星期五'
      case '6': return '星期六'
      case '7': return '星期日'
      default: return 'no match'
    }
  }

  getStudentCourses() {
    return fetch('/api/v1.0/student_course/' + this.state.student_id + '/', {
             accept: 'application/json',
             method: 'get',
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeData)
             .then(this.handleData)
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJSON(response) {
    return response.json();
  }

  storeData(data) {
    this.setState({
      courses: data,
    });
  }

  handleData() {
    var CourseInfoList = this.state.courses['course_list'].map((course, index) => {
      return (
        <div className="row" key={course['course_id']}>
          <div className="col-sm-12">
            <StudentCourseInfo
              student_id={this.state.student_id}
              course_id={course['course_id']}
              course_name={this.getDay(course['course_day']) + ' ' + this.getGrade(course['course_grade']) + this.getSubject(course['course_subject']) + ' ' + course['course_teacher'] + '老師'}
            />
          </div>
        </div>
      )
    });
    this.setState({
      course_list: CourseInfoList,
    });
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
            <StudentNotes student_id={this.state.student_id}/>
          </div>
        </div>
        <div className="row"><div className="col-sm-12"><StudentStudyInfo student_id={this.state.student_id}/></div></div>
        <div className="row"><div className="col-sm-12"><StudentMealsInfo student_id={this.state.student_id}/></div></div>
        <div>{this.state.course_list} </div>
      </div>
    )
  }
}

module.exports = StudentDashboardMain;
