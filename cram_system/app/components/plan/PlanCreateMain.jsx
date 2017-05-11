var React = require('react');
var DateTimeField = require('react-bootstrap-datetimepicker');

class PlanCreateMain extends React.Component {
  constructor() {
    super();

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    if (today.getMonth() + 1 < 10) {
      date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
    }

    this.state = {
      dateTime: date,
      format: "YYYY-MM-DD",
      viewMode: "date",
      inputFormat: "YYYY/MM/DD",
      name: [],
      id: [],
      date: date,
      subject: 'chinese',
      range: [],
      need_a_quiz: true,
      note: [],
    }

    this.getSubject = this.getSubject.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleNeedQuizChange = this.handleNeedQuizChange.bind(this);
    this.handleNotNeedQuizChange = this.handleNotNeedQuizChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      name: localStorage.getItem("student_name"),
      id: localStorage.getItem("student_id")
    });
  }

  getSubject(subject) {
    switch (subject) {
      case '國文': return 'chinese'
      case '英文': return 'english'
      case '數學': return 'math'
      case '物理': return 'physics'
      case '化學': return 'chemistry'
      case '生物': return 'biology'
      case '地科': return 'earth_science'
      case '地理': return 'geography'
      case '歷史': return 'history'
      case '公民': return 'civil_ethics_education'
      default: return 'no match'
    }
  }

  handleRangeChange(e) {
    this.setState({range: e.target.value});
  }

  handleSubjectChange(e) {
    this.setState({subject: this.getSubject(e.target.value) });
  }

  handleNeedQuizChange(e) {
    this.setState({need_a_quiz: true});
  }

  handleNotNeedQuizChange(e) {
    this.setState({need_a_quiz: false});
  }

  handleNoteChange(e) {
    this.setState({note: e.target.value});
  }

  handleDateChange(newDate) {
    return this.setState({date: newDate});
  }

  render() {
    const {dateTime, format, viewMode, inputFormat} = this.state;
    const hStyle = {
      textAlign: 'center'
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div><h3 style={hStyle}>{'新增'+this.state.name+'的讀計'}</h3></div>
        <div className="row">
          <div className="well bs-component">
            <form className="form-horizontal" id="form_create_quiz">
              <fieldset>
                <legend>讀書計畫</legend>
                <div className="form-group">
                  <label htmlFor="inputDate" className="col-sm-2 control-label">日期</label>
                  <div className="col-sm-10">
                    <DateTimeField
                      defaultText="Please select date"
                      dateTime={dateTime}
                      format={format}
                      mode={viewMode}
                      inputFormat={inputFormat}
                      onChange={this.handleDateChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputSubject" className="col-sm-2 control-label">科目</label>
                  <div className="col-sm-10">
                    <select className="form-control" id="select" name="subject" onChange={this.handleSubjectChange}>
                      <option>國文</option>
                      <option>英文</option>
                      <option>數學</option>
                      <option>物理</option>
                      <option>化學</option>
                      <option>生物</option>
                      <option>地科</option>
                      <option>地理</option>
                      <option>歷史</option>
                      <option>公民</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputRange" className="col-sm-2 control-label">範圍</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputRange" placeholder="Range" name="range" value={this.state.range} onChange={this.handleRangeChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">要出考卷嗎</label>
                  <div className="col-sm-10">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" onChange={this.handleNeedQuizChange}/>
                        需要
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" onChange={this.handleNotNeedQuizChange}/>
                        不需要
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="textArea" className="col-sm-2 control-label">備註</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" rows="3" id="textArea" name="note" onChange={this.handleNoteChange}></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <a className="btn btn-primary" onClick={() => {window.history.back()}}>Back</a>
                    <a type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Submit</a>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PlanCreateMain;
