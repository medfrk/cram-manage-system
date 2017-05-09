var React = require('react');

class StudentCard extends React.Component {
  constructor(){
    super();
  }

  render() {
    const imgStyle = {
      'width': '100%',
    };
    const pStyle = {
      'textAlign': 'center',
    }

    return (
      <div className="col-md-3">
        <img style={imgStyle} src={this.props.student_image}/>
        <p style={pStyle}>{this.props.student_name}</p>
        <p style={pStyle}>{this.props.student_school}</p>
      </div>
    );
  }
}

module.exports = StudentCard;
