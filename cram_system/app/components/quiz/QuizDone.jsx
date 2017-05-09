var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizDoneMain = require('QuizDoneMain');

class QuizDone extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizDoneMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizDone;
