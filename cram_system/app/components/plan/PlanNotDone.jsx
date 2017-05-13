var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanNotDoneMain = require('PlanNotDoneMain');

class PlanNotDone extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <PlanNotDoneMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = PlanNotDone;
