var React = require('react');
var SigningTableRow = require('SigningTableRow');

class SigningMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      list: [],
      update_at: [],
      page_header: [],
      api_url: [],
    }

    this.getSigning = this.getSigning.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillMount() {
    this.setState({
      page_header: localStorage.getItem("page_header"),
      api_url: localStorage.getItem("api_url"),
    });
  }

  componentDidMount() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.getSigning(date)
  }

  getSigning(specific_date) {
    return fetch(this.state.api_url + specific_date + '/', {
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
    var studentSigningTableRowList = this.state.students['signing_list'].map((student, index) => {
      return (
        <SigningTableRow
          key={student['id']}
          signing_id={student['id']}
          student_number={index+1}
          student_name={student['student_name']}
          student_seat={student['student_seat']}
          student_sign={student['sign']}
          student_leave={student['leave']}
          handle_update={this.handleUpdate}
        />
      )
    });
    this.setState({
      list: studentSigningTableRowList,
    });
  }

  handleUpdate(data){
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.getSigning(date)
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div className="row"> <h3 style={hStyle}>{this.state.page_header}</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>座位</th>
                <th>簽到</th>
                <th>請假</th>
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

module.exports = SigningMain;
