var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var SigningAbsentMain = require('SigningAbsentMain');

class SigningAbsent extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <SigningAbsentMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = SigningAbsent;
