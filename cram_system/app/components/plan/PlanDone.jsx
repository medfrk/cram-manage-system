var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanDoneMain = require('PlanDoneMain');

class PlanDone extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <PlanDoneMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = PlanDone;
