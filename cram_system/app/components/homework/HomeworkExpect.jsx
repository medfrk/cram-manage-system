var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var HomeworkExpectMain = require('HomeworkExpectMain');

class HomeworkExpect extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <HomeworkExpectMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = HomeworkExpect;
