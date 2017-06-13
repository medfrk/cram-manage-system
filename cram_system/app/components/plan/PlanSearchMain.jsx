var React = require('react');
var DateTimeField = require('react-bootstrap-datetimepicker');
var PlanSearchTableRow = require('PlanSearchTableRow');

class PlanSearchMain extends React.Component {
  constructor() {
    super();

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
      id: [],
      name: [],
      plans: [],
      list: [],
      dateTime: date,
      format: "YYYY-MM-DD",
      viewMode: "date",
      inputFormat: "YYYY/MM/DD",
      date_start: [],
      date_end: [],
    }

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentWillMount() {
    this.setState({
      name: localStorage.getItem("student_name"),
      id: localStorage.getItem("student_id"),
      dateTime: localStorage.getItem("plan_date"),
    });
  }

  handleStartDateChange(newDate) {
    return this.setState({date_start: newDate});
  }

  handleEndDateChange(newDate) {
    return this.setState({date_end: newDate});
  }

  handleSubmit() {
    return fetch('/api/v1.0/plan_manage/number/' + this.state.id + '/' + this.state.date_start + '/' + this.state.date_end + '/', {
             accept: 'application/json',
             method: 'get',
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
    var plan_list = this.state.plans.plan_number_list;
    var plan_table_row = plan_list.map((plan, index) => {
      return (
        <PlanSearchTableRow
          key={index}
          student_name={this.state.name}
          student_id={this.state.id}
          plan_date={plan['date']}
          plan_all={plan['plan_all']}
          plan_done={plan['plan_done']}
          plan_not_done={plan['plan_not_done']}
        />
      )
    });
    this.setState({
      list: plan_table_row,
    });
  }

  render() {
    const {dateTime, format, viewMode, inputFormat} = this.state;
    const hStyle = {
      textAlign: 'center'
    }
    const divStyle = {
      marginTop: '25px',
      marginBottom: '25px',
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <h3 style={hStyle}>{'搜尋'+this.state.name+'的讀書計畫'}</h3>
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
        <div className="row" style={divStyle}>
          <div className="col-sm-10 col-sm-offset-1">
            <a className="btn btn-primary btn-lg" onClick={() => {window.history.back()}}>Back</a>
            <a type="submit" className="btn btn-primary pull-right btn-lg" onClick={this.handleSubmit}>Search</a>
          </div>
        </div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>日期</th>
                <th>總數</th>
                <th>完成</th>
                <th>未完成</th>
                <th>查看</th>
                <th>新增</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

module.exports = PlanSearchMain;
