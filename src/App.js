import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits:[],
      credits:[],
    }
  }

  fetchDebits(){
    axios.get('https://moj-api.herokuapp.com/debits')
      .then(response =>{
        this.setState({debits:response.data});
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  fetchCredits(){
    axios.get('https://moj-api.herokuapp.com/credits')
      .then(response =>{
        this.setState({credits:response.data});
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  getBalance(){
    let totalCredits = 0;
    let totalDebits = 0;

    for (var i = 0; i < this.state.credits.length; i++){
      totalCredits += this.state.credits[i].amount;
    }

    for (var i = 0; i < this.state.debits.length; i++){
      totalDebits += this.state.debits[i].amount;
    }

    return (totalCredits - totalDebits).toFixed(2);

  }

  componentDidMount(){
    this.fetchCredits();
    this.fetchDebits();
  }



  render() {

    const HomeComponent = () => (<Home accountBalance={this.getBalance()}/>)
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );

    const DebitsComponent = () => (<Debits accountBalance={this.getBalance()} debits={this.state.debits}/>)
    const CreditsComponent = () => (<Credits accountBalance={this.getBalance()} credits={this.state.credits}/>)


    return (
        <Router>
          <div>
            <Route exact path="/" component={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;
