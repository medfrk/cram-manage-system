var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanToPrintMain = require('PlanToPrintMain');

class PlanToPrint extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <PlanToPrintMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = PlanToPrint;
