var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanSearchMain = require('PlanSearchMain');

class PlanSearch extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <PlanSearchMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = PlanSearch;
