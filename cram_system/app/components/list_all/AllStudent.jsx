var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var AllStudentMain = require('AllStudentMain');

class AllStudent extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <AllStudentMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = AllStudent;
