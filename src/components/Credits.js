import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import "./Credits.css";

class Credits extends Component {
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
    this.props.addCredit(obj)
    //this.props.debits[this.props.debits.length] = 
  }

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
          <br/>
          <p class ="info">Account Balance: {this.props.accountBalance}</p>
          <br/>
          <p class ="info">Amount: <input name="amount" type="number" step="0.01" min="0" onChange={this.handleChange}></input></p>
          <br/>
          <p class ="info">description: <input name="description" type="text" onChange={this.handleChange}></input></p>
          <button id="submit" onClick={this.handleSubmit}>Add Credit</button>
          


          <h2> Credits </h2>

          <table> {credits} </table>
          <p id="total">Total Credits: {total}</p> 
        </div>
    );
  }
}

export default Credits;
