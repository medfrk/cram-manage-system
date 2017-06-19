var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var NoteCourseByDateMain = require('NoteCourseByDateMain');

class NoteCourseByDate extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <NoteCourseByDateMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = NoteCourseByDate;
