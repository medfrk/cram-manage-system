var React = require('react');
var TableRowForCourseBankLog = require('TableRowForCourseBankLog');

class StudentCourseInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      add_balance: [],
      add_money: [],
      note: [],
      bank: [],
      logs: [],
      log_list: [],
      updateStudyBankNotDone: false,
      createStudyBankLogNotDone: false,
      prevState: false
    }

    this.getCourseBank = this.getCourseBank.bind(this);
    this.getCourseLog = this.getCourseLog.bind(this);
    this.updateCourseBank = this.updateCourseBank.bind(this);
    this.updateCourseBank = this.updateCourseBank.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeData = this.storeData.bind(this);
    this.storeLogData = this.storeLogData.bind(this);
    this.handleLogData = this.handleLogData.bind(this);
    this.handleBalanceChange = this.handleBalanceChange.bind(this);
    this.handleMoneyChange = this.handleMoneyChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCourseBank();
    this.getCourseLog();
  }

  getCourseBank() {
    return fetch('/api/v1.0/bank/course/' + this.props.course_id + '/' + this.props.student_id + '/', {
             accept: 'application/json',
             method: 'get',
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeData)
  }

  getCourseLog() {
    return fetch('/api/v1.0/bank/course/logs/' + this.props.course_id + '/' + this.props.student_id + '/7/', {
             accept: 'application/json',
             method: 'get',
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeLogData)
             .then(this.handleLogData)
  }

  updateCourseBank() {
    return fetch('/api/v1.0/basic/student/course/bank/' + this.state.bank['bank_id'] + '/', {
             method: 'PATCH',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               balance: parseInt(this.state.bank['balance']) + parseInt(this.state.add_balance),
             }),
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.getCourseBank)
             .then(()=>this.setState({prevState: this.state.updateStudyBankNotDone && this.state.createStudyBankLogNotDone}))
             .then(()=>this.setState({updateStudyBankNotDone:false}));
  }

  createCourseBankLog() {
    return fetch('/api/v1.0/basic/student/course/bank/log/', {
             method: 'post',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               owner: this.props.student_id,
               course: this.props.course_id,
               balance: this.state.add_balance,
               money: this.state.add_money,
               note: this.state.note,
             }),
             credentials: 'include'
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.getCourseLog)
             .then(()=>this.setState({prevState: this.state.updateStudyBankNotDone && this.state.createStudyBankLogNotDone}))
             .then(()=>this.setState({createStudyBankLogNotDone:false}));
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
      logs: data,
    });
  }

  handleLogData() {
    var BankLogList = this.state.logs['log_list'].map((list, index) => {
      return(
        <TableRowForCourseBankLog
          key={list['id']}
          balance={list['balance']}
          money={list['money']}
          note={list['note']}
          date={list['created_at']}
        />
      )
    })
    this.setState({
      log_list: BankLogList
    })
  }

  handleBalanceChange(e) {
    this.setState({add_balance: e.target.value});
  }

  handleMoneyChange(e) {
    this.setState({add_money: e.target.value});
  }

  handleNoteChange(e) {
    this.setState({note: e.target.value});
  }

  handleSubmit() {
    this.setState({prevState: this.state.updateStudyBankNotDone && this.state.createStudyBankLogNotDone});
    this.setState({updateStudyBankNotDone:true, createStudyBankLogNotDone:true});
    this.updateCourseBank();
    this.createCourseBankLog();
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    const btnStyle = {
      'width': '100%',
    }

    const divStyle = {
      'margin': '10px',
    }

    const not_done = this.state.updateStudyBankNotDone && this.state.createStudyBankLogNotDone

    const inputBalance = not_done ?
      <input type="text" className="form-control" id="inputBalance" placeholder="Add balance" name="Balance" onChange={this.handleBalanceChange} disabled/> :
      <input type="text" className="form-control" id="inputBalance" placeholder="Add balance" name="Balance" onChange={this.handleBalanceChange}/>;
    const inputMoney =  not_done ?
      <input type="text" className="form-control" id="inputMoney" placeholder="Add money" name="Money" onChange={this.handleMoneyChange} disabled/> :
      <input type="text" className="form-control" id="inputMoney" placeholder="Add money" name="Money" onChange={this.handleMoneyChange}/> ;
    const textarea =  not_done ?
      <textarea className="form-control" rows="3" id="textArea" placeholder="Take notes" name="note" onChange={this.handleNoteChange} disabled></textarea > :
      <textarea className="form-control" rows="3" id="textArea" placeholder="Take notes" name="note" onChange={this.handleNoteChange}></textarea> ;

    if(this.state.prevState && ! not_done){
      document.getElementById("form_course_info"+this.props.course_id).reset();
    }

    return (
      <div>
        <div className="row"> <h5 style={hStyle}>Course Info</h5></div>
        <div className="row"> <h5 style={hStyle}>{this.props.course_name}</h5></div>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>堂數</th>
                    <th>金額</th>
                    <th>備註</th>
                    <th>時間</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.log_list}
                </tbody>
              </table>
              <a className="btn btn-primary" style={btnStyle}>More</a>
            </div>
            <div style={divStyle}>
              <a className="btn btn-primary" style={btnStyle}>Signing Log</a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">課程繳費區</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-12">
                    <p>{'剩餘堂數: ' + this.state.bank['balance'] + ' 堂'}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="well bs-component">
                    <form className="form-horizontal" id={"form_course_info"+this.props.course_id}>
                      <fieldset>
                        <div className="form-group">
                          <label htmlFor="inputBalance" className="col-sm-4 control-label">新增堂數:</label>
                          <div className="col-sm-8">
                            {inputBalance}
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputMoney" className="col-sm-4 control-label">繳費金額:</label>
                          <div className="col-sm-8">
                            {inputMoney}
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="textArea" className="col-sm-4 control-label">備註:</label>
                          <div className="col-sm-8">
                            {textarea}
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

module.exports = StudentCourseInfo;
