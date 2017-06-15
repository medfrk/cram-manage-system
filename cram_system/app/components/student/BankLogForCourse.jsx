var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var BankLogForCourseMain = require('BankLogForCourseMain');

class BankLogForCourse extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <BankLogForCourseMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = BankLogForCourse;
