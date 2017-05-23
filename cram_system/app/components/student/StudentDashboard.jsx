var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var StudentDashboardMain = require('StudentDashboardMain');

class StudentDashboard extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <StudentDashboardMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = StudentDashboard;
