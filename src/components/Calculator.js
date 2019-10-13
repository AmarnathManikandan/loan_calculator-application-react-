import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import DisplayChild from "./DisplayChild"
//import { hashHistory } from 'react-router;'

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";
class Calculator extends Component {
  state = {
    amountValue: 500,
    yearsValue: 6,
    data : {},
    monthlyPayment:{},
    payment:[],
    loading:true
  };
  
  handleAmountChange = value => {
    this.setState({ amountValue: value },()=>this.componentDidMount());
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value },()=>this.componentDidMount());
  };
  
  
  

  async componentDidMount() {
   
      let url="https://ftl-frontend-test.herokuapp.com/interest?amount="+this.state.amountValue+"&numMonths="+this.state.yearsValue+"";
      let response=await fetch(url);
      this.state.data = await response.json();
      console.log(this.state.data);
    
   // let{ amountValue, yearsValue, data} = this.state;
   
  // <p>{this.data.interestRate}%</p>;
 // hashHistory.push('/');
  
  

  //let currentUrlParams = new URLSearchParams("https://ftl-frontend-test.herokuapp.com/interest?amount=500&numMonths=6");
  //urrentUrlParams.set('amount', amountValue);
  //this.props.history.push("https://ftl-frontend-test.herokuapp.com/interest" + "?" + currentUrlParams.toString());
  
   // console.log(new_url);
   // console.log(url.search);
    //console.log(data.interestRate);
    //console.log(data.monthlyPayment.amount);
    //;
  } 

  render() {
    const { amountValue, yearsValue,data } = this.state;
    
    return( 
      <div>
    <div className="App">
    <h4>I want to borrow ${amountValue}</h4>
    <InputRange
      step={100}
      maxValue={5000}
      minValue={500}
      value={amountValue}
      onChange={this.handleAmountChange}
      
    />
    
     
    <h4>
      Over {yearsValue} month{yearsValue > 1 && "s"}
    </h4>
    
    <InputRange
      step={1}
      maxValue={24}
      minValue={6}
      value={yearsValue}
      onChange={this.handleYearChange}
    />
   
     <div className="flex">
       <p>
      {this.state.data.interestRate}%
      <DisplayChild  text="interest rate" /></p></div>
      <div className="flex">
     <p>
      $
      <DisplayChild  text="monthly repayment" /> </p>
      </div>
    <Display years={yearsValue} amount={amountValue} dat={data} />
   
  </div>
 
   
  </div>
  
  );
     
   
  }
}

export default Calculator;
