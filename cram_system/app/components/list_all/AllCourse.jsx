var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var AllCourseMain = require('AllCourseMain');

class AllCourse extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <AllCourseMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = AllCourse;
