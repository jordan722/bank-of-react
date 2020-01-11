import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class debits extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: 0,
      description: ""
    }
  }

  handleChange = (event) =>{
    if(event.target.name === "amount"){
      this.setState({
        amount: event.target.value
      })
    }else{
      this.setState({
        description: event.target.value
      })
    }
  }

  handleSubmit = () => {
    let date = new Date();
    let dateNow = date.getFullYear() + "-" + date.getMonth()+1 + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "Z";

    let obj = {
      date: dateNow,
      description: this.state.description,
      amount: parseInt(this.state.amount)
    }
    this.props.addDebit(obj)
    //this.props.debits[this.props.debits.length] = 
  }

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
          <br/>
          Amount: <input name="amount" type="number" step="0.01" min="0" onChange={this.handleChange}></input>
          <br/>
          description: <input name="description" type="text" onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit}>Add debit</button>
          

          <h2> Debits </h2>

          <table> {debits} </table>
          Total Debits: {total}

         
        </div>
    );
  }
}

export default debits;
