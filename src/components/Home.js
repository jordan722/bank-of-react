import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://m.economictimes.com/thumb/msid-69106463,width-120,height-90,resizemode-4,imgsize-169788/bank-getty.jpg" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>

          <AccountBalance accountBalance={this.props.accountBalance}/>

          <Link to="/Credits">Credits</Link>
          <br/>
          <Link to="/Debits">Debits</Link>
        </div>
    );
  }
}

export default Home;
