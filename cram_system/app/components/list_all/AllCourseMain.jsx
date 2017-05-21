var React = require('react');
var CourseTableRow = require('CourseTableRow');

class AllCourseMain extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      day1_list: [],
      day2_list: [],
      day3_list: [],
      day4_list: [],
      day5_list: [],
      day6_list: [],
      day7_list: [],
    }

    this.getSubject = this.getSubject.bind(this);
    this.getGrade = this.getGrade.bind(this);
    this.getDay = this.getDay.bind(this);
    this.getAllCourses = this.getAllCourses.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);

    this.getAllCourses();
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

  getAllCourses() {
    return fetch('/api/v1.0/course_info/', {
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

  handleData(data) {
    var list = [[], [], [], [], [], [], []];
    var obj = [];
    this.state.courses.course_basic_info.map((day_courses, day_index) => {
      day_courses.course_list.map((course, index) => {
        obj = (
          <CourseTableRow
            key={course['course_id']}
            course_id={course['course_id']}
            course_number={day_index+index+1}
            course_teacher={course['teacher']}
            course_space={course['space']}
            course_subject={this.getSubject(course['subject'])}
            course_grade={this.getGrade(course['grade'])}
            course_day={this.getDay(course['day'])}
            course_start_at={course['start_at']}
            course_end_at={course['end_at']}
            course_student_number={course['student_number']}
          />
        )
        list[day_index].push(obj);
      })
    })

    this.setState({
      day1_list: list[0],
      day2_list: list[1],
      day3_list: list[2],
      day4_list: list[3],
      day5_list: list[4],
      day6_list: list[5],
      day7_list: list[6],
    })
  }

  render() {
    const hStyle = {
      textAlign: 'center'
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div><h3 style={hStyle}>星期一課程</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>科目</th>
                <th>年級</th>
                <th>時間</th>
                <th>老師</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>
              {this.state.day1_list}
            </tbody>
          </table>
        </div>
        <div><h3 style={hStyle}>星期二課程</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>科目</th>
                <th>年級</th>
                <th>時間</th>
                <th>老師</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>
              {this.state.day2_list}
            </tbody>
          </table>
        </div>
        <div><h3 style={hStyle}>星期三課程</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>科目</th>
                <th>年級</th>
                <th>時間</th>
                <th>老師</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>
              {this.state.day3_list}
            </tbody>
          </table>
        </div>
        <div><h3 style={hStyle}>星期四課程</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>科目</th>
                <th>年級</th>
                <th>時間</th>
                <th>老師</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>
              {this.state.day4_list}
            </tbody>
          </table>
        </div>
        <div><h3 style={hStyle}>星期五課程</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>科目</th>
                <th>年級</th>
                <th>時間</th>
                <th>老師</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>
              {this.state.day5_list}
            </tbody>
          </table>
        </div>
        <div><h3 style={hStyle}>星期六課程</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>科目</th>
                <th>年級</th>
                <th>時間</th>
                <th>老師</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>
              {this.state.day6_list}
            </tbody>
          </table>
        </div>
        <div><h3 style={hStyle}>星期日課程</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>科目</th>
                <th>年級</th>
                <th>時間</th>
                <th>老師</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>
              {this.state.day7_list}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

module.exports = AllCourseMain;
