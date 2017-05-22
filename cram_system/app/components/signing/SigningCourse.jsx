var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var SigningCourseMain = require('SigningCourseMain');

class SigningCourse extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <SigningCourseMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = SigningCourse;
