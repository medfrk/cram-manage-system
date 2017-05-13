var React = require('react');
var PlanTableRowForToday = require('PlanTableRowForToday');

class PlanExpectMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      list: [],
      update_at: [],
    }

    this.getPlanExpect = this.getPlanExpect.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.getPlanExpect(date)
  }

  getPlanExpect(specific_date) {
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
    var studentPlanTableRowList = this.state.students['signing_list'].map((student, index) => {
      return (
        <PlanTableRowForToday
          key={student['id']}
          signing_id={student['id']}
          student_finish_previous={student['finish_previous']}
          student_plan={student['plan_number']}
          student_number={index+1}
          student_id={student['student_id']}
          student_name={student['student_name']}
          student_seat={student['student_seat']}
          student_finish_plan={student['finish_plan']}
          handle_update={this.handleUpdate}
        />
      )
    });
    this.setState({
      list: studentPlanTableRowList,
    });
  }

  handleUpdate(data){
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.getPlanExpect(date)
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div className="row"> <h3 style={hStyle}>應該完成讀計名單</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>座位</th>
                <th>先前讀計</th>
                <th>進度</th>
                <th>查看</th>
                <th>完成</th>
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

module.exports = PlanExpectMain;
