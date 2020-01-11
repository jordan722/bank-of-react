import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class debits extends Component {

  render() {
    var debits = [];
    var total = 0;
    for (var i=0; i < this.props.debits.length; i++){
      debits.push(
      <tr>
        <td> {this.props.debits[i].date} </td>
        <td> {this.props.debits[i].description} </td>
        <td> {this.props.debits[i].amount} </td>
      </tr>
      );
      total += this.props.debits[i].amount;
    }

    return (
        <div>
          <img src="https://m.economictimes.com/thumb/msid-69106463,width-120,height-90,resizemode-4,imgsize-169788/bank-getty.jpg" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/">Home</Link>
          <br/>
          Account Balance: {this.props.accountBalance}

          <h2> Debits </h2>

          <table> {debits} </table>
          Total Debits: {total}
        </div>
    );
  }
}

export default debits;
