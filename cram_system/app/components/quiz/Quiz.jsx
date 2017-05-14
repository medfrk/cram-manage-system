var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizMain = require('QuizMain');

class Quiz extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Quiz;
