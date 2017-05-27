var React = require('react');

class StudentBasicInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      student: [],
    }

    this.getGrade = this.getGrade.bind(this);
    this.getStudentBasicInfo = this.getStudentBasicInfo.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  componentDidMount() {
    this.getStudentBasicInfo();
  }

  getGrade(grade) {
    switch (grade) {
      case '5': return '小五'
      case '6': return '小六'
      case '7': return '國一'
      case '8': return '國二'
      case '9': return '國三'
      case '10': return '高一'
      case '11': return '高二'
      case '12': return '高三'
      default: return 'no match'
    }
  }

  getStudentBasicInfo() {
    return fetch('/api/v1.0/basic/student/' + this.props.student_id + '/', {
             accept: 'application/json',
             method: 'get',
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeData)
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJSON(response) {
    return response.json();
  }

  storeData(data) {
    this.setState({
      student: data,
    });
  }


  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    const imgStyle = {
      'width': '100%',
    };

    return (
      <div>
        <div className="row"> <h5 style={hStyle}>Basic Info</h5></div>
        <div className="row">
          <div className="col-sm-6">
            <p>{'姓名: ' + this.state.student['name']}</p>
            <p>{'綽號: ' + this.state.student['nickname']}</p>
            <p>{'生日: ' + this.state.student['birthday']}</p>
            <p>{'年級: ' + this.getGrade(this.state.student['grade'])}</p>
            <p>{'學校: ' + this.state.student['school']}</p>
            <p>{'聯絡人: ' + this.state.student['contact1_name']}</p>
            <p>{'關係: ' + this.state.student['contact1_relationship']}</p>
            <p>{'電話: ' + this.state.student['contact1_phone']}</p>
          </div>
          <div className="col-sm-6">
            <img style={imgStyle}/>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = StudentBasicInfo;
