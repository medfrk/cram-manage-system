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
      numberReport: [],
    }

    this.getNumberReport = this.getNumberReport.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.storeNumberReport = this.storeNumberReport.bind(this);

    // this.getAllStudent();

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.getNumberReport(date);
  }

  getNumberReport(specific_date) {
    return fetch('/api/v1.0/study_manage/' + specific_date + '/', {
             accept: 'application/json',
             method: 'get',
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeNumberReport)
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
      students: data.results,
    });
  }

  storeNumberReport(data) {
    this.setState({
      numberReport: data,
    });
  }

  render() {
    var number = this.state.numberReport
    var signingListGroups = <SigningListGroups
          expected={number['signingExpect']}
          actual={number['signingActual']}
          absent={number['signingAbsent']}
          leave={number['signingLeave']} />
    var quizCreateListGroups = <QuizCreateListGroups
          expected={number['quizCreateExpect']}
          done={number['quizCreateDone']}
          not_done={number['quizCreateNotDone']} />
    var homeworkListGroups = <HomeworkListGroups
          expected={number['homeworkExpect']}
          done={number['homeworkDone']}
          not_done={number['homeworkNotDone']} />
    var quizListGroups = <QuizListGroups
          expected={number['quizExpect']}
          done={number['quizDone']}
          not_done={number['quizNotDone']} />
    var planListGroups = <PlanListGroups
          expected={number['planExpect']}
          done={number['planDone']}
          not_done={number['planNotDone']} />
    var leftListGroups = <LeftListGroups
          total={number['leftExpect']}
          can_left={number['leftCanGo']}
          left={number['leftDone']}
          not_left={number['leftNotDone']} />



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
      </div>
    );
  }
}

module.exports = IndexMain;
