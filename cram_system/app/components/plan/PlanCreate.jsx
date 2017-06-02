var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var PlanCreateMain = require('PlanCreateMain');

class PlanCreate extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <PlanCreateMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = PlanCreate;
