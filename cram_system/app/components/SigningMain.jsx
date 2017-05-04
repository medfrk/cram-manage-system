var React = require('react');
var SigningTableRow = require('SigningTableRow');

class SigningMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      list: [],
    }

    this.getSigningExpect = this.getSigningExpect.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.getSigningExpect(date)
  }

  getSigningExpect(specific_date) {
    return fetch('http://localhost:8000/api/v1.0/study_manage/signing/expect/' + specific_date + '/', {
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
    console.log(response);
    return response.json();
  }

  storeData(data) {
    this.setState({
      students: data,
    });
  }

  handleData(data) {
    var studentSigningTableRowList = this.state.students['signing_list'].map((student, index) => {
      return (
        <SigningTableRow
          key={index}
          student_number={index+1}
          student_name={student['student_name']}
          student_seat={student['student_seat']}
          student_sign={student['sign']}
        />
      )
    });
    this.setState({
      list: studentSigningTableRowList,
    });
  }



  render() {
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <h1>SigningMain</h1>
        <div>
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>Column heading</th>
                <th>Column heading</th>
                <th>Column heading</th>
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

module.exports = SigningMain;
