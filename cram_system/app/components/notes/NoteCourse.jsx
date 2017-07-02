var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var NoteCourseMain = require('NoteCourseMain');

class NoteCourse extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <NoteCourseMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = NoteCourse;
