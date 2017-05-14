var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizCreateMain = require('QuizCreateMain');

class QuizCreate extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizCreateMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizCreate;
