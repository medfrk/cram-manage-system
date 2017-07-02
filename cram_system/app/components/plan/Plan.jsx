var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanMain = require('PlanMain');

class Plan extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <PlanMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Plan;
