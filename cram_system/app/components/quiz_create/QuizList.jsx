var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var QuizListMain = require('QuizListMain');

class QuizList extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <QuizListMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = QuizList;
