var React = require('react');
var TableRowForMealsBankLog = require('TableRowForMealsBankLog');

class BankLogForMealsMain extends React.Component {
  constructor() {
    super();

    this.state = {
      student_id: [],
      meals_logs: [],
      meals_log_list: [],
    }

    this.checkStatus = this.checkStatus.bind(this);
    this.getMealsLog = this.getMealsLog.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeLogData = this.storeLogData.bind(this);
    this.handleLogData = this.handleLogData.bind(this);
  }

  componentWillMount() {
    this.setState({
      student_id: localStorage.getItem("student_id"),
    });
  }

  componentDidMount() {
    this.getMealsLog();
  }

  getMealsLog() {
    return fetch('/api/v1.0/bank/meals/logs/' + this.state.student_id + '/30/', {
             accept: 'application/json',
             method: 'get',
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeLogData)
             .then(this.handleLogData)
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

  storeLogData(data) {
    this.setState({
      meals_logs: data,
    });
  }

  handleLogData() {
    var BankLogList = this.state.meals_logs['log_list'].map((list, index) => {
      return(
        <TableRowForMealsBankLog
          key={list['id']}
          balance={list['balance']}
          money={list['money']}
          note={list['note']}
          date={list['created_at']}
        />
      )
    })
    this.setState({
      meals_log_list: BankLogList
    })
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div className="row"> <h3 style={hStyle}>Student Meals Bank Log</h3></div>
        <div className="row">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>餘額</th>
                <th>金額</th>
                <th>備註</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              {this.state.meals_log_list}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

module.exports = BankLogForMealsMain;
