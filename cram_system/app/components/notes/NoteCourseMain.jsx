var React = require('react');

class NoteCourseMain extends React.Component {
  constructor() {
    super();

    this.state = {
      name: [],
      course_id: [],
      content: [],
    }
  }

  render() {
    const hStyle = {
      textAlign: 'center'
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div><h3 style={hStyle}>新增課程備註</h3></div>
      </div>
    );
  }
}

module.exports = NoteCourseMain;
