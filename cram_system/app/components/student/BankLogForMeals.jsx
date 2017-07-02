var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var BankLogForMealsMain = require('BankLogForMealsMain');

class BankLogForMeals extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName} />
        <BankLogForMealsMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = BankLogForMeals;
