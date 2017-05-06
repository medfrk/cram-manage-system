var React = require('react');
var QuizCreateTableRow = require('QuizCreateTableRow');

class QuizCreateExpectMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      list: [],
      update_at: [],
    }

    this.getQuizCreateExpect = this.getQuizCreateExpect.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.getQuizCreateExpect(date)
  }

  getQuizCreateExpect(specific_date) {
    return fetch('http://localhost:8000/api/v1.0/study_manage/signing/actual/' + specific_date + '/', {
             accept: 'application/json',
             method: 'get',
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
      students: data,
    });
  }

  handleData(data) {
    var studentQuizCreateTableRowList = this.state.students['signing_list'].map((student, index) => {
      return (
        <QuizCreateTableRow
          key={index}
          signing_id={student['id']}
          student_number={index+1}
          student_id={student['student_id']}
          student_name={student['student_name']}
          student_seat={student['student_seat']}
          student_have_create_quiz={student['have_create_quiz']}
          handle_update={this.handleUpdate}
        />
      )
    });
    this.setState({
      list: studentQuizCreateTableRowList,
    });
  }

  handleUpdate(data){
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.getQuizCreateExpect(date)
    this.setState({
      update_at: data,
    });
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div className="row"> <h3 style={hStyle}>小考登記名單</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>座位</th>
                <th>新增</th>
                <th>完成</th>
                <th>取消</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

module.exports = QuizCreateExpectMain;
