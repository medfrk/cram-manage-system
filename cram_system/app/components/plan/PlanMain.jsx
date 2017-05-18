var React = require('react');
var PlanTableRow = require('PlanTableRow');

class PlanMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      list: [],
    }

    this.getGrade = this.getGrade.bind(this);
    this.getAllStudent = this.getAllStudent.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);

    this.getAllStudent();
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

  getAllStudent() {
    return fetch('/api/v1.0/basic/student/', {
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
      students: data.results,
    });
  }

  handleData(data) {
    var studentTableRowList = this.state.students.map((student, index) => {
      return (
        <PlanTableRow
          key={student['id']}
          student_id={student['id']}
          student_number={index+1}
          student_name={student['name']}
          student_school={student['school']}
          student_grade={this.getGrade(student['grade'])}
        />
      )
    })
    this.setState({
      list: studentTableRowList,
    });
  }

  render() {
    const hStyle = {
      textAlign: 'center'
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div><h3 style={hStyle}>管理學生的讀書計畫</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>學校</th>
                <th>年級</th>
                <th>查看</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

module.exports = PlanMain;
