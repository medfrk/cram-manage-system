var React = require('react');
var StudentCard = require('StudentCard');
var SigningListGroups = require('SigningListGroups');
var QuizCreateListGroups = require('QuizCreateListGroups');
var HomeworkListGroups = require('HomeworkListGroups');
var QuizListGroups = require('QuizListGroups');
var PlanListGroups = require('PlanListGroups');
var LeftListGroups = require('LeftListGroups');


class IndexMain extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    }

    this.getAllStudent = this.getAllStudent.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);

    this.getAllStudent();
  }

  getAllStudent() {
    return fetch('http://localhost:8000/api/v1.0/basic/student/', {
             accept: 'application/json',
             method: 'get',
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
    console.log(response);
    return response.json();
  }

  storeData(data) {
    this.setState({
      students: data.results,
    });
  }

  render() {
    var studentCardList = this.state.students.map((student, index) => {
      return (
        <StudentCard
          key={index}
          student_name={student['name']}
          student_image={student['image']}
          student_school={student['school']}
        />
      )
    })

    var signingListGroups = <SigningListGroups expected={40} actual={25} absent={10} leave={5} />
    var quizCreateListGroups = <QuizCreateListGroups expected={25} done={20} not_done={5} />
    var homeworkListGroups = <HomeworkListGroups expected={25} done={23} not_done={2} />
    var quizListGroups = <QuizListGroups expected={20} done={17} not_done={3} />
    var planListGroups = <PlanListGroups expected={25} done={23} not_done={2} />
    var leftListGroups = <LeftListGroups total={25} can_left={5} left={3} not_left={22} />



    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div className="row">
          {signingListGroups}
          {quizCreateListGroups}
        </div>
        <div className="row">
          {homeworkListGroups}
          {quizListGroups}
        </div>
        <div className="row">
          {planListGroups}
          {leftListGroups}
        </div>
        <div>
          {studentCardList}
        </div>
      </div>
    );
  }
}

module.exports = IndexMain;
