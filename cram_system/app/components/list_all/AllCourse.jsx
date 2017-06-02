var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var AllCourseMain = require('AllCourseMain');

class AllCourse extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <AllCourseMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = AllCourse;
