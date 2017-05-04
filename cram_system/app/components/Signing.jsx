var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var SigningMain = require('SigningMain');

class Signing extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <SigningMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Signing;
