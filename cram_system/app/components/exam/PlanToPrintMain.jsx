var React = require('react');

var DateTimeField = require('react-bootstrap-datetimepicker');
var PlanToPrintRow = require('PlanToPrintRow');

class PlanToPrintMain extends React.Component {
  constructor() {
    super();

    this.getPlanToPrint = this.getPlanToPrint.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleChineseSearch = this.handleChineseSearch.bind(this);
    this.handleEnglishSearch = this.handleEnglishSearch.bind(this);
    this.handleMathSearch = this.handleMathSearch.bind(this);
    this.handlePhysicsSearch = this.handlePhysicsSearch.bind(this);
    this.handleChemistrySearch = this.handleChemistrySearch.bind(this);
    this.handleBiologySearch = this.handleBiologySearch.bind(this);
    this.handleEarth_scienceSearch = this.handleEarth_scienceSearch.bind(this);
    this.handleGeographySearch = this.handleGeographySearch.bind(this);
    this.handleHistorySearch = this.handleHistorySearch.bind(this);
    this.handleCivilEthicsEducationSearch = this.handleCivilEthicsEducationSearch.bind(this);

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
      dateTime: date,
      format: "YYYY-MM-DD",
      viewMode: "date",
      inputFormat: "YYYY/MM/DD",
      date_start: [],
      date_end: [],
      subject: [],
      plans: [],
      list: [],
    }
  }

  getPlanToPrint(subject) {
    return fetch('/api/v1.0/plan_to_print/' + subject + '/' + this.state.date_start + '/' + this.state.date_end + '/', {
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
      plans: data,
    });
  }

  handleData() {
    var plan_list = this.state.plans.plan_list;
    var plan_table_row = plan_list.map((plan, index) => {
      return (
        <PlanToPrintRow
          key={index}
          plan_id={plan['plan_id']}
          owner_name={plan['owner_name']}
          owner_grade={plan['owner_grade']}
          owner_school={plan['owner_school']}
          plan_date={plan['plan_date']}
          plan_range={plan['plan_range']}
          plan_note={plan['plan_note']}
          print_out={plan['print_out']}
          handle_update={this.handleUpdate}
        />
      )
    });
    this.setState({
      list: plan_table_row,
    });
  }

  handleUpdate() {
    this.getPlanToPrint(this.state.subject)
  }

  handleStartDateChange(newDate) {
    return this.setState({date_start: newDate});
  }

  handleEndDateChange(newDate) {
    return this.setState({date_end: newDate});
  }

  handleChineseSearch() {
    this.setState({subject: 'chinese'});
    this.getPlanToPrint('chinese');
  }
  handleEnglishSearch() {
    this.setState({subject: 'english'});
    this.getPlanToPrint('english');
  }
  handleMathSearch() {
    this.setState({subject: 'math'});
    this.getPlanToPrint('math');
  }
  handlePhysicsSearch() {
    this.setState({subject: 'physics'});
    this.getPlanToPrint('physics');
  }
  handleChemistrySearch() {
    this.setState({subject: 'chemistry'});
    this.getPlanToPrint('chemistry');
  }
  handleBiologySearch() {
    this.setState({subject: 'biology'});
    this.getPlanToPrint('biology');
  }
  handleEarth_scienceSearch() {
    this.setState({subject: 'earth_science'});
    this.getPlanToPrint('earth_science');
  }
  handleGeographySearch() {
    this.setState({subject: 'geography'});
    this.getPlanToPrint('geography');
  }
  handleHistorySearch() {
    this.setState({subject: 'history'});
    this.getPlanToPrint('history');
  }
  handleCivilEthicsEducationSearch() {
    this.setState({subject: 'civil_ethics_education'});
    this.getPlanToPrint('civil_ethics_education');
  }

  render() {
    const {dateTime, format, viewMode, inputFormat} = this.state;
    const hStyle = {
      'textAlign': 'center',
    }
    const divStyle = {
      'margin': '10px',
    }
    const btnStyle = {
      'margin': '10px',
      'width': '80%',
    }

    const btn_search_chinese_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleChineseSearch}>國文</a>
    const btn_search_english_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleEnglishSearch}>英文</a>
    const btn_search_math_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleMathSearch}>數學</a>
    const btn_search_physics_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handlePhysicsSearch}>物理</a>
    const btn_search_chemistry_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleChemistrySearch}>化學</a>
    const btn_search_biology_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleBiologySearch}>生物</a>
    const btn_search_earth_science_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleEarth_scienceSearch}>地科</a>
    const btn_search_geography_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleGeographySearch}>地理</a>
    const btn_search_history_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleHistorySearch}>歷史</a>
    const btn_search_civil_ethics_education_plan = <a type="submit" className="btn btn-primary" style={btnStyle} onClick={this.handleCivilEthicsEducationSearch}>公民</a>

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <div className="row"><h3 style={hStyle}>查詢讀計考卷</h3></div>
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-1">
            <DateTimeField
              defaultText="Please select start date"
              dateTime={dateTime}
              format={format}
              mode={viewMode}
              inputFormat={inputFormat}
              onChange={this.handleStartDateChange}
            />
          </div>
          <div className="col-md-5">
            <DateTimeField
              defaultText="Please select end date"
              dateTime={dateTime}
              format={format}
              mode={viewMode}
              inputFormat={inputFormat}
              onChange={this.handleEndDateChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-md-offset-1" style={divStyle}>{btn_search_chinese_plan}</div>
          <div className="col-md-2" style={divStyle}>{btn_search_english_plan}</div>
          <div className="col-md-2" style={divStyle}>{btn_search_math_plan}</div>
          <div className="col-md-2" style={divStyle}>{btn_search_physics_plan}</div>
          <div className="col-md-2" style={divStyle}>{btn_search_chemistry_plan}</div>
        </div>
        <div className="row">
          <div className="col-md-2 col-md-offset-1" style={divStyle}>{btn_search_biology_plan}</div>
          <div className="col-md-2" style={divStyle}>{btn_search_earth_science_plan}</div>
          <div className="col-md-2" style={divStyle}>{btn_search_geography_plan}</div>
          <div className="col-md-2" style={divStyle}>{btn_search_history_plan}</div>
          <div className="col-md-2" style={divStyle}>{btn_search_civil_ethics_education_plan}</div>
        </div>
        <div className="row" style={divStyle}>
          <h5 style={hStyle}>{this.state.date_start + '~' + this.state.date_end + ' ' + this.state.subject}</h5>
        </div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>姓名</th>
                <th>日期</th>
                <th>年級</th>
                <th>學校</th>
                <th>範圍</th>
                <th>備註</th>
                <th>出卷</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

module.exports = PlanToPrintMain;
