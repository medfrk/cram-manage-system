var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanExpectMain = require('PlanExpectMain');

class PlanExpect extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <PlanExpectMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = PlanExpect;
