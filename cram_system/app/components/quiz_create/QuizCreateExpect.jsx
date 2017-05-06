var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizCreateExpectMain = require('QuizCreateExpectMain');

class QuizCreateExpect extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <QuizCreateExpectMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizCreateExpect;
