var React = require('react');
var TableRowForMealsBankLog = require('TableRowForMealsBankLog');

class StudentMealsInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      money: [],
      note: [],
      bank: [],
      meals_logs: [],
      meals_log_list: [],
    }

    this.getMealsBank = this.getMealsBank.bind(this);
    this.getMealsLog = this.getMealsLog.bind(this);
    this.updateMealsBank = this.updateMealsBank.bind(this);
    this.createMealsBankLog = this.createMealsBankLog.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.storeLogData = this.storeLogData.bind(this);
    this.handleLogData = this.handleLogData.bind(this);
    this.handleMoneyChange = this.handleMoneyChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMealsBank();
    this.getMealsLog();
  }

  getMealsBank() {
    return fetch('/api/v1.0/bank/meals/' + this.props.student_id + '/', {
             accept: 'application/json',
             method: 'get',
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeData)
  }

  getMealsLog() {
    return fetch('/api/v1.0/bank/meals/logs/' + this.props.student_id + '/7/', {
             accept: 'application/json',
             method: 'get',
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeLogData)
             .then(this.handleLogData)
  }

  updateMealsBank() {
    return fetch('/api/v1.0/basic/student/meals/bank/' + this.state.bank['bank_id'] + '/', {
             method: 'patch',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               balance: parseInt(this.state.bank['balance']) + parseInt(this.state.money),
             }),
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
  }

  createMealsBankLog() {
    return fetch('/api/v1.0/basic/student/meals/bank/log/', {
             method: 'post',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               owner: this.props.student_id,
               balance: parseInt(this.state.bank['balance']) + parseInt(this.state.money),
               money: this.state.money,
               note: this.state.note,
             }),
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
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
      bank: data,
    });
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

  handleMoneyChange(e) {
    this.setState({money: e.target.value});
  }

  handleNoteChange(e) {
    this.setState({note: e.target.value});
  }

  handleSubmit() {
    this.updateMealsBank();
    this.createMealsBankLog();
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    const btnStyle = {
      'width': '100%',
    }

    return (
      <div>
        <div className="row"> <h5 style={hStyle}>Meals Info</h5></div>
        <div className="row">
          <div className="col-sm-6">
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
              <a className="btn btn-primary" style={btnStyle}>More</a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">餐費繳費區</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-12">
                    <p>{'餐費餘額: ' + this.state.bank['balance'] + ' 元'}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="well bs-component">
                    <form className="form-horizontal">
                      <fieldset>
                        <div className="form-group">
                          <label htmlFor="inputMoney" className="col-sm-4 control-label">金額:</label>
                          <div className="col-sm-8">
                            <input type="text" className="form-control" id="inputMoney" placeholder="Add money" name="Money" onChange={this.handleMoneyChange}/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="textArea" className="col-sm-4 control-label">備註:</label>
                          <div className="col-sm-8">
                            <textarea className="form-control" rows="3" id="textArea" placeholder="Take notes" name="note" onChange={this.handleNoteChange}></textarea>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-lg-12">
                            <a className="btn btn-primary" style={btnStyle} onClick={() => {this.handleSubmit()} }>Submit</a>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = StudentMealsInfo;
