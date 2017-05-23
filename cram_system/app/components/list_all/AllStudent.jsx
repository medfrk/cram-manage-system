var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var AllStudentMain = require('AllStudentMain');

class AllStudent extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <AllStudentMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = AllStudent;
