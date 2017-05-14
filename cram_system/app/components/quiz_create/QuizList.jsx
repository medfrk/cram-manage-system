var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizListMain = require('QuizListMain');

class QuizList extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizListMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizList;
