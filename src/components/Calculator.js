import React, {Component} from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import DisplayChild from "./DisplayChild"
import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
    state = {
        amountValue: 500,
        yearsValue: 6,
        data: {monthlyPayment: {amount: 0}},
        loading: true
    };
    handleAmountChange = value => {this.setState({amountValue: value}, () => this.componentDidMount());};
    handleYearChange = value => {this.setState({yearsValue: value}, () => this.componentDidMount());};
    async componentDidMount() {
     let url = "https://ftl-frontend-test.herokuapp.com/interest?amount=" + this.state.amountValue + "&numMonths=" + this.state.yearsValue + "";
     let response = await fetch(url);
     this.state.data = await response.json();
    }
    render() {
        const {amountValue, yearsValue, data} = this.state;
        return (
            <div>
                <div className="App">
                    <h4>I want to borrow ${amountValue} </h4>
                    <InputRange step={100} maxValue={5000} minValue={500} value={amountValue} onChange={this.handleAmountChange}/>
                    <h4> Over {yearsValue} month{yearsValue > 1 && "s"} </h4>
                    <InputRange step={1} maxValue={24} minValue={6} value={yearsValue} onChange={this.handleYearChange}/>
                    <div className="flex"><p>{this.state.data.interestRate}% <DisplayChild text="interest rate"/> </p></div>
                    <div className="flex"><p>${this.state.data.monthlyPayment.amount} <DisplayChild text="monthly repayment"/> </p></div>
                    <Display years={yearsValue} amount={amountValue} dat={data}/>
                </div>
            </div>
        );
    }
} export default Calculator;
