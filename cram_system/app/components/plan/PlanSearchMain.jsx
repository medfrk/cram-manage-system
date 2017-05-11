var React = require('react');
var DateTimeField = require('react-bootstrap-datetimepicker');

class PlanSearchMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      list: [],
    }
  }

  render() {
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <h1>PlanSearchMain</h1>
        </div>
        <DateTimeField
          dateTime="1990-06-05"
          format="YYYY-MM-DD"
          viewMode="date"
          inputFormat="DD/MM/YYYY"
        />
      </div>
    );
  }
}

module.exports = PlanSearchMain;
