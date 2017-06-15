var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var BankLogForMealsMain = require('BankLogForMealsMain');

class BankLogForMeals extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <BankLogForMealsMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = BankLogForMeals;
