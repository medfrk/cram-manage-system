var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanForTodayMain = require('PlanForTodayMain');

class PlanForToday extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <PlanForTodayMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = PlanForToday;
