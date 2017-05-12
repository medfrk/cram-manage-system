var React = require('react');
var DateTimeField = require('react-bootstrap-datetimepicker');

class PlanSearchMain extends React.Component {
  constructor() {
    super();

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    if (today.getMonth() + 1 < 10) {
      date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
    }

    this.state = {
      id: [],
      name: [],
      students: [],
      list: [],
      dateTime: date,
      format: "YYYY-MM-DD",
      viewMode: "date",
      inputFormat: "YYYY/MM/DD",
      date_start: [],
      date_end: [],
    }

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      name: localStorage.getItem("student_name"),
      id: localStorage.getItem("student_id")
    });
  }

  handleStartDateChange(newDate) {
    return this.setState({date_start: newDate});
  }

  handleEndDateChange(newDate) {
    return this.setState({date_end: newDate});
  }

  render() {
    const {dateTime, format, viewMode, inputFormat} = this.state;
    const hStyle = {
      textAlign: 'center'
    }
    const divStyle = {
      marginTop: '25px',
      marginBottom: '25px',
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <h3 style={hStyle}>{'搜尋'+this.state.name+'的讀書計畫'}</h3>
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-1">
            <DateTimeField
              defaultText="Please select start date"
              dateTime={dateTime}
              format={format}
              mode={viewMode}
              inputFormat={inputFormat}
              onChange={this.handleStartDateChange}
            />
          </div>
          <div className="col-md-5">
            <DateTimeField
              defaultText="Please select end date"
              dateTime={dateTime}
              format={format}
              mode={viewMode}
              inputFormat={inputFormat}
              onChange={this.handleEndDateChange}
            />
          </div>
        </div>
        <div className="row" style={divStyle}>
          <div className="col-sm-10 col-sm-offset-1">
            <a className="btn btn-primary btn-lg" onClick={() => {window.history.back()}}>Back</a>
            <a type="submit" className="btn btn-primary pull-right btn-lg" onClick={this.handleSubmit}>Submit</a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PlanSearchMain;
