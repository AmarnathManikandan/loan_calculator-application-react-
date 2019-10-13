import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";
import Calculator from "./Calculator"
import "../styles/Display.css";
class Display extends Component {
  state = {
    APR: 0.25,
   
  };

  componentDidMount() {
  
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {

  };

  calculateMonthlyRepayment = () => {
    
    return <p>$93</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR}%</p>;
  };

  render() {
    
    return (
      <div className="flex">
        
        
       {this.state.loading ?<div>loading...</div>:<div></div>}
      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
