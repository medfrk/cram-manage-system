var React = require('react');

var QuizToPrintRow = require('QuizToPrintRow');

class QuizToPrintMain extends React.Component {
  constructor() {
    super();

    this.getQuizToPrint = this.getQuizToPrint.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    var today = new Date();
    var date = today.getFullYear();

    if (today.getMonth() + 1 < 10) {
      date += '-0' + (today.getMonth() + 1);
    }
    else {
      date += '-' + (today.getMonth() + 1);
    }

    if (today.getDate() < 10) {
      date += '-0' + today.getDate();
    }
    else {
      date += '-' + today.getDate();
    }

    this.state = {
      dateTime: date,
      quizzes: [],
      list: [],
    }
  }

  componentDidMount() {
    this.getQuizToPrint();
  }

  getQuizToPrint() {
    return fetch('/api/v1.0/quiz_to_print/' + this.state.dateTime + '/', {
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
      quizzes: data,
    });
  }

  handleData() {
    var quiz_list = this.state.quizzes.quiz_list;
    var quiz_table_row = quiz_list.map((quiz, index) => {
      return (
        <QuizToPrintRow
          key={index}
          quiz_id={quiz['quiz_id']}
          owner_name={quiz['owner_name']}
          owner_grade={quiz['owner_grade']}
          owner_school={quiz['owner_school']}
          quiz_date={quiz['quiz_date']}
          quiz_range={quiz['quiz_range']}
          quiz_note={quiz['quiz_note']}
          print_out={quiz['print_out']}
          handle_update={this.handleUpdate}
        />
      )
    });
    this.setState({
      list: quiz_table_row,
    });
  }

  handleUpdate() {
    this.getQuizToPrint()
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }
    const divStyle = {
      'margin': '10px',
    }

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <div className="row"><h3 style={hStyle}>查詢小考考卷</h3></div>
        </div>
        <div className="row" style={divStyle}>
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>姓名</th>
                <th>日期</th>
                <th>年級</th>
                <th>學校</th>
                <th>範圍</th>
                <th>備註</th>
                <th>出卷</th>
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

module.exports = QuizToPrintMain;
