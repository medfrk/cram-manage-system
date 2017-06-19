var React = require('react');

var DateTimeField = require('react-bootstrap-datetimepicker');
var NoteCourseByDateRow = require('NoteCourseByDateRow');

class NoteCourseByDateMain extends React.Component {
  constructor() {
    super();

    this.getNotes = this.getNotes.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
      format: "YYYY-MM-DD",
      viewMode: "date",
      inputFormat: "YYYY/MM/DD",
      date: date,
      notes: [],
      list: [],
    }
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes() {
    return fetch('/api/v1.0/note/get_by_date/course/' + this.state.date + '/', {
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
      notes: data,
    });
  }

  handleData() {
    var note_list = this.state.notes.note_list;
    var note_table_row = note_list.map((note, index) => {
      return (
        <NoteCourseByDateRow
          key={index}
          owner_name={note['owner_name']}
          content={note['content']}
          created_by={note['created_by']}
          created_at={note['created_at']}
        />
      )
    });
    this.setState({
      list: note_table_row,
    });
  }

  handleDateChange(newDate) {
    return this.setState({date: newDate});
  }

  handleSubmit() {
    this.getNotes();
  }

  render() {
    const {dateTime, format, viewMode, inputFormat} = this.state;
    const hStyle = {
      'textAlign': 'center',
    }
    const divStyle = {
      'margin': '10px',
    }
    const btnStyle = {
      'width': '100%',
    }

    const btn_submit = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleSubmit}>查詢</a>

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <div className="row"><h3 style={hStyle}>課程回報</h3></div>
        </div>
        <div className="row" style={divStyle}>
          <div className="col-md-6">
            <DateTimeField
              defaultText="Please select date"
              dateTime={dateTime}
              format={format}
              mode={viewMode}
              inputFormat={inputFormat}
              onChange={this.handleDateChange}
            />
          </div>
          <div className="col-md-3 pull-right"> {btn_submit} </div>
        </div>
        <div className="row" style={divStyle}>
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>課程</th>
                <th>內容</th>
                <th>回報人</th>
                <th>時間</th>
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

module.exports = NoteCourseByDateMain;
