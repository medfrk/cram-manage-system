var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizMain = require('QuizMain');

class Quiz extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <QuizMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Quiz;
