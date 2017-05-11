var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanMain = require('PlanMain');

class Plan extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <PlanMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Plan;
