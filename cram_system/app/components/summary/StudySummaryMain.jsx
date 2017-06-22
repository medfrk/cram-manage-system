var React = require('react');

var DateTimeField = require('react-bootstrap-datetimepicker');
var NoteRow = require('NoteRow');
var PlanRow = require('PlanRow');
var QuizRow = require('QuizRow');


class StudySummaryMain extends React.Component {
  constructor() {
    super();

    this.getKind = this.getKind.bind(this);
    this.getSubject = this.getSubject.bind(this);
    this.handleSigningReport = this.handleSigningReport.bind(this);
    this.handleNoteReport = this.handleNoteReport.bind(this);
    this.handleQuizReport = this.handleQuizReport.bind(this);
    this.handlePlanReport = this.handlePlanReport.bind(this);
    this.getDailyReport = this.getDailyReport.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    var today = new Date();
    var date = today.getFullYear();

    if (today.getMonth() + 1 < 10) {
      date += '-0' + (today.getMonth() + 1);
    }
    else {
      date += '-' + (today.getMonth() + 1);
    }

    if (today.getDate() < 10) {
      date += '-0' + today.getDate();
    }
    else {
      date += '-' + today.getDate();
    }

    this.state = {
      student_id: [],
      dateTime: date,
      format: "YYYY-MM-DD",
      viewMode: "date",
      inputFormat: "YYYY/MM/DD",
      date: date,
      api_result: [],
      student_name: [],
      signing_report: [],
      note_report: [],
      quiz_report: [],
      plan_report: [],
    }
  }

  componentWillMount() {
    this.setState({
      student_id: localStorage.getItem("student_id"),
    });
  }

  componentDidMount() {
    this.getDailyReport();
  }

  getKind(kind) {
    switch (kind) {
        case 'course': return '課程'
        case 'sign': return '點名'
        case 'homework': return '作業'
        case 'quiz': return '小考'
        case 'plan': return '讀計'
        case 'order': return '秩序'
        case 'bank': return '學費'
        case 'normal': return '一般'
      default: return 'no match'
    }
  }

  getSubject(subject) {
    switch (subject) {
      case 'chinese': return '國文'
      case 'english': return '英文'
      case 'math': return '數學'
      case 'physics': return '物理'
      case 'chemistry': return '化學'
      case 'biology': return '生物'
      case 'earth_science': return '地科'
      case 'geography': return '地理'
      case 'history': return '歷史'
      case 'civil_ethics_education': return '公民'
      default: return 'no match'
    }
  }

  getDailyReport() {
    return fetch('/api/v1.0/study_report/' + this.state.student_id + '/' + this.state.date + '/', {
             accept: 'application/json',
             method: 'get',
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeData)
             .then(this.handleData)
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
      api_result: data,
    });
  }

  handleData() {
    console.log(this.state.api_result);
    this.setState({
      student_name: this.state.api_result.student_name,
    });
    this.handleSigningReport();
    this.handleNoteReport();
    this.handleQuizReport();
    this.handlePlanReport();
  }

  handleSigningReport() {
    const sign = this.state.api_result.signing_report
    const signing_report = (
      <div className="row">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>簽到</th>
              <th>填小考</th>
              <th>作業</th>
              <th>小考</th>
              <th>讀書計畫</th>
              <th>離開</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{sign['sign'] ? '完成' : '未完成'}</td>
              <td>{sign['create_quiz'] ? '完成' : '未完成'}</td>
              <td>{sign['finish_homework'] ? '完成' : '未完成'}</td>
              <td>{sign['finish_quiz'] ? '完成' : '未完成'}</td>
              <td>{sign['finish_plan'] ? '完成' : '未完成'}</td>
              <td>{sign['left'] ? '完成' : '未完成'}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>{sign['sign'] ? sign['sign_at'] : ' '}</td>
              <td>{sign['create_quiz'] ? sign['create_quiz_at'] : ' '}</td>
              <td>{sign['finish_homework'] ? sign['finish_homework_at'] : ' '}</td>
              <td>{sign['finish_quiz'] ? sign['finish_quiz_at'] : ' '}</td>
              <td>{sign['finish_plan'] ? sign['finish_plan_at'] : ' '}</td>
              <td>{sign['left'] ? sign['left_at'] : ' '}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    this.setState({
      signing_report: signing_report,
    });
  }

  handleNoteReport() {
    var note_list = this.state.api_result.note_report;
    var note_table_row = note_list.map((note, index) => {
      return (
        <NoteRow
          key={index}
          kind={this.getKind(note['kind'])}
          content={note['content']}
          created_by={note['created_by']}
          created_at={note['created_at']}
        />
      )
    });
    this.setState({
      note_report: note_table_row,
    });
  }

  handleQuizReport() {
    var quiz_list = this.state.api_result.quiz_report;
    var quiz_table_row = quiz_list.map((quiz, index) => {
      return (
        <QuizRow
          key={index}
          subject={this.getSubject(quiz['subject'])}
          range={quiz['range']}
          note={quiz['note']}
          score={quiz['score']}
          finish={quiz['finish'] ? '完成' : '未完成'}
          updated_at={quiz['finish'] ? quiz['updated_at'] : ' '}
        />
      )
    });
    this.setState({
      quiz_report: quiz_table_row,
    });
  }

  handlePlanReport() {
    var plan_list = this.state.api_result.plan_report;
    var plan_table_row = plan_list.map((plan, index) => {
      return (
        <PlanRow
          key={index}
          subject={this.getSubject(plan['subject'])}
          range={plan['range']}
          need_quiz={plan['need_quiz'] ? '是' : '否'}
          note={plan['note']}
          score={plan['need_quiz'] ? plan['score'] : '--'}
          finish={plan['finish'] ? '完成' : '未完成'}
          updated_at={plan['finish'] ? plan['updated_at'] : ' '}
        />
      )
    });
    this.setState({
      plan_report: plan_table_row,
    });
  }

  handleDateChange(newDate) {
    return this.setState({date: newDate});
  }

  handleSubmit() {
    this.getDailyReport();
  }


  render() {
    const {dateTime, format, viewMode, inputFormat} = this.state;
    const hStyle = {
      'textAlign': 'center',
    }
    const divStyle = {
      'margin': '20px',
    }
    const btnStyle = {
      'margin': '10px',
      'width': '80%',
    }

    const btn_submit = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleSubmit}>查詢</a>

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <div className="row"><h3 style={hStyle}>{this.state.date + ' ' + this.state.student_name + ' Report'}</h3></div>
        </div>
        <div className="row" style={divStyle}>
          <div className="col-md-6">
            <DateTimeField
              defaultText="Please select date"
              dateTime={dateTime}
              format={format}
              mode={viewMode}
              inputFormat={inputFormat}
              onChange={this.handleDateChange}
            />
          </div>
          <div className="col-md-3 pull-right"> {btn_submit} </div>
        </div>
        <div className="row" style={divStyle}>
          <div><h5 style={hStyle}>自習進度表</h5></div>
          {this.state.signing_report}
        </div>
        <div className="row" style={divStyle}>
          <div><h5 style={hStyle}>今日回報表</h5></div>
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>類別</th>
                <th>內容</th>
                <th>記錄人</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              {this.state.note_report}
            </tbody>
          </table>
        </div>
        <div className="row" style={divStyle}>
          <div><h5 style={hStyle}>小考記錄表</h5></div>
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>科目</th>
                <th>範圍</th>
                <th>備註</th>
                <th>分數</th>
                <th>完成</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              {this.state.quiz_report}
            </tbody>
          </table>
        </div>
        <div className="row" style={divStyle}>
          <div><h5 style={hStyle}>讀計紀錄表</h5></div>
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>科目</th>
                <th>範圍</th>
                <th>考卷</th>
                <th>備註</th>
                <th>分數</th>
                <th>完成</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              {this.state.plan_report}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

module.exports = StudySummaryMain;
