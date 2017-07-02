var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var CreateQuizMain = require('CreateQuizMain');

class CreateQuiz extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <CreateQuizMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = CreateQuiz;
