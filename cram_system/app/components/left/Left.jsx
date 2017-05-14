var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var LeftMain = require('LeftMain');

class Left extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <LeftMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Left;
