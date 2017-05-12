var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var FinishPlanMain = require('FinishPlanMain');

class FinishPlan extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <FinishPlanMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = FinishPlan;
