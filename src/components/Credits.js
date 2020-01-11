import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credits extends Component {

  render() {
    var credits = [];
    var total = 0;
    for (var i=0; i < this.props.credits.length; i++){
      credits.push(
      <tr>
        <td> {this.props.credits[i].date} </td>
        <td> {this.props.credits[i].description} </td>
        <td> {this.props.credits[i].amount} </td>
      </tr>
      );
      total += this.props.credits[i].amount;
    }

    return (
        <div>
          <img src="https://m.economictimes.com/thumb/msid-69106463,width-120,height-90,resizemode-4,imgsize-169788/bank-getty.jpg" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/">Home</Link>

          <h2> Credits </h2>

          <table> {credits} </table>
          Total Credits: {total}
        </div>
    );
  }
}

export default Credits;
