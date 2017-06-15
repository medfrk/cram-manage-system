var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var BankLogForStudyMain = require('BankLogForStudyMain');

class BankLogForStudy extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <BankLogForStudyMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = BankLogForStudy;
