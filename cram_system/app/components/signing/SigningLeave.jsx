var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var SigningLeaveMain = require('SigningLeaveMain');

class SigningLeave extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <SigningLeaveMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = SigningLeave;
