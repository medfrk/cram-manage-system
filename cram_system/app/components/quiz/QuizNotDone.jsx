var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizNotDoneMain = require('QuizNotDoneMain');

class QuizNotDone extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizNotDoneMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizNotDone;
