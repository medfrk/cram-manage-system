var React = require('react');

class StudentCourseInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      add_balance: [],
      add_money: [],
      note: [],
    }

    this.handleBalanceChange = this.handleBalanceChange.bind(this);
    this.handleMoneyChange = this.handleMoneyChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
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

    return (
      <div>
        <div className="row"> <h5 style={hStyle}>Course Info</h5></div>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>金額</th>
                    <th>堂數</th>
                    <th>時間</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3200</td>
                    <td>+10</td>
                    <td>2017-5-17</td>
                    <td>wtlin</td>
                  </tr>
                  <tr>
                    <td>2800</td>
                    <td>+8</td>
                    <td>2017-5-17</td>
                    <td>wtlin</td>
                  </tr>
                  <tr>
                    <td>3200</td>
                    <td>+10</td>
                    <td>2017-5-17</td>
                    <td>wtlin</td>
                  </tr>
                  <tr>
                    <td>2400</td>
                    <td>+6</td>
                    <td>2017-5-17</td>
                    <td>wtlin</td>
                  </tr>
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
                    <p>剩餘堂數: 20</p>
                  </div>
                </div>
                <div className="row">
                  <div className="well bs-component">
                    <form className="form-horizontal">
                      <fieldset>
                        <div className="form-group">
                          <label htmlFor="inputBalance" className="col-sm-4 control-label">新增堂數:</label>
                          <div className="col-sm-8">
                            <input type="text" className="form-control" id="inputBalance" placeholder="Add balance" name="Balance" onChange={this.handleBalanceChange}/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputMoney" className="col-sm-4 control-label">繳費金額:</label>
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
                            <a className="btn btn-primary" style={btnStyle}>Submit</a>
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
