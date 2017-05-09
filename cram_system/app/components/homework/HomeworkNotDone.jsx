var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var HomeworkNotDoneMain = require('HomeworkNotDoneMain');

class HomeworkNotDone extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <HomeworkNotDoneMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = HomeworkNotDone;
