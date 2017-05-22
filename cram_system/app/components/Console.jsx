var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var ConsoleMain = require('ConsoleMain');

class Console extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <ConsoleMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Console;
