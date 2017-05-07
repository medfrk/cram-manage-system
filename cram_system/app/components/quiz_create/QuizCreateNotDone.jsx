var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizCreateNotDoneMain = require('QuizCreateNotDoneMain');

class QuizCreateNotDone extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizCreateNotDoneMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizCreateNotDone;
