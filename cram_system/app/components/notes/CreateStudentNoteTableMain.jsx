var React = require('react');
var CreateStudentNoteTableRow = require('CreateStudentNoteTableRow');

class CreateStudentNoteTableMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      list: [],
      update_at: [],
      page_header: [],
      api_url: [],
    }

    this.getStudent = this.getStudent.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentWillMount() {
    this.setState({
      page_header: localStorage.getItem("page_header"),
      api_url: localStorage.getItem("api_url"),
    });
  }

  componentDidMount() {
    this.getStudent()
  }

  getStudent() {
    return fetch(this.state.api_url, {
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
    var CreateStudentNoteTableRowList = this.state.students['student_list'].map((student, index) => {
      return (
        <CreateStudentNoteTableRow
          key={student['id']}
          student_id={student['id']}
          student_number={index+1}
          student_name={student['student_name']}
          student_seat={student['student_seat']}
        />
      )
    });
    this.setState({
      list: CreateStudentNoteTableRowList,
    });
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
                <th>回報</th>
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

module.exports = CreateStudentNoteTableMain;
