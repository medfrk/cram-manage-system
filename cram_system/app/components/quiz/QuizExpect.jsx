var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizExpectMain = require('QuizExpectMain');

class QuizExpect extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizExpectMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizExpect;
