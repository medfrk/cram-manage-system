var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var HomeworkDoneMain = require('HomeworkDoneMain');

class HomeworkDone extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <HomeworkDoneMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = HomeworkDone;
