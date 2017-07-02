var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var ConsoleMain = require('ConsoleMain');

class Console extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <ConsoleMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Console;
