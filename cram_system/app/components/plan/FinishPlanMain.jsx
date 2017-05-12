var React = require('react');
var FinishPlanCard = require('FinishPlanCard');

class FinishPlanMain extends React.Component {
  constructor() {
    super();

    this.state = {
      name: [],
      id: [],
      date: [],
      plans: [],
      cards: [],
    }

    this.getAllPlan = this.getAllPlan.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storePlanList = this.storePlanList.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // Before the first render, set state by localStorage.
  componentWillMount() {
    this.setState({
      name: localStorage.getItem("student_name"),
      id: localStorage.getItem("student_id"),
      date: localStorage.getItem("plan_date"),
    });
  }

  // After the first render, fetch the api to get plan list.
  componentDidMount() {
    this.getAllPlan(this.state.id, this.state.date);
  }

  getAllPlan(student_id, specific_date) {
    return fetch('http://localhost:8000/api/v1.0/plan_manage/' + student_id + '/' + specific_date + '/' + specific_date + '/', {
             accept: 'application/json',
             method: 'get',
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storePlanList)
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

  storePlanList(data) {
    this.setState({
      plans: data,
    });
  }

  handleData() {
    var plan_list = this.state.plans.plan_list[0].plan_list;
    var plan_cards = plan_list.map( (plan, index) => {
      return (
        <FinishPlanCard
          key={plan.id}
          id={plan.id}
          date={plan.date}
          subject={plan.subject}
          range={plan.range}
          need_quiz={plan.need_quiz}
          finish_quiz={plan.finish_quiz}
          finish={plan.finish}
          score={plan.score}
          note={plan.note}
          handle_update={this.handleUpdate}
        />
      )
    })
    this.setState({
      cards: plan_cards,
    })
  }

  handleUpdate(){
    this.getAllPlan(this.state.id, this.state.date)
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div className="row"><h3 style={hStyle}>{this.state.date + ' ' + this.state.name + ' 的讀書計畫'}</h3></div>
        <div>
          {this.state.cards}
        </div>
      </div>
    )
  }
}

module.exports = FinishPlanMain;
