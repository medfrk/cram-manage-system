var React = require('react');
var SigningCourseTableRow = require('SigningCourseTableRow');

class SigningCourseMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      list: [],
      update_at: [],
      course_name: [],
      course_id: [],
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
      course_name: localStorage.getItem("course_name"),
      course_id: localStorage.getItem("course_id"),
    });
  }

  componentDidMount() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.getSigning(date)
  }

  getSigning(specific_date) {
    return fetch('/api/v1.0/course_manage/get/signing/' + specific_date + '/' + this.state.course_id + '/', {
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
      signings: data,
    });
  }

  handleData(data) {
    var CourseSigningTableRowList = this.state.signings['signing_list'].map((signing, index) => {
      return (
        <SigningCourseTableRow
          key={signing['id']}
          signing_id={signing['id']}
          signing_number={index+1}
          signing_name={signing['owner_name']}
          signing_contact={signing['owner_contact']}
          signing_sign={signing['sign']}
          signing_leave={signing['leave']}
          handle_update={this.handleUpdate}
        />
      )
    });
    this.setState({
      list: CourseSigningTableRowList,
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
        <div className="row"> <h3 style={hStyle}>{this.state.course_name + ' 課程簽到表'}</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>聯絡</th>
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

module.exports = SigningCourseMain;
