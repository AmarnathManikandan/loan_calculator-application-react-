## React Loan Calculator

> React loan calculator



Drag sliders and get an accurate percentage to be paid.
I have tried to fetch the amount from API and display but not completed.




## Installation

### Setup

```sh
git clone https://github.com/AmarnathManikandan/loan_calculator-application-react-.git
cd react-loan-calculator
npm install
npm start
```

### Tests

```sh
npm run test
```

## Documentation

### Amount Range Slider

- A controlled component that can accept number values between 1000 and 20000
- Increases or decreases by a number value of 100 at a time ('step' prop)

### Years Range Slider

- A controlled component that can accept number values between 1 and 5
- The values indicate the amount of years rather than months
- Increases or decreases by a number value of 1 month at a time ('step' prop), to represent changes from 6 months to 24 months.

### Display component

- Must have two props: 'month' and 'amount', both values are numbers.

### DisplayChild component

- Must have two props: 'func' and 'text'. 'Func' takes in a function as its value and 'text' a string.
