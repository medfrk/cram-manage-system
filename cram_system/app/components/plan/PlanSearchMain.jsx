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
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <h3 style={hStyle}>PlanSearchMain</h3>
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
      </div>
    );
  }
}

module.exports = PlanSearchMain;
