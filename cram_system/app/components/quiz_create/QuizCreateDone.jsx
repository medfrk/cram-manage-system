var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizCreateDoneMain = require('QuizCreateDoneMain');

class QuizCreateDone extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizCreateDoneMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizCreateDone;
