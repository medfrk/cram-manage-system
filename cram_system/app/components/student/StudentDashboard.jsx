var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var StudentDashboardMain = require('StudentDashboardMain');

class StudentDashboard extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <StudentDashboardMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = StudentDashboard;
