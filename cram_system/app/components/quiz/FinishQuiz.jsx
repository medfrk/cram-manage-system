var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var FinishQuizMain = require('FinishQuizMain');

class FinishQuiz extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <FinishQuizMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = FinishQuiz;
