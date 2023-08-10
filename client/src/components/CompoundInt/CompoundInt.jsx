import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, Box ,Stack,InputAdornment, FormControl,InputLabel,OutlinedInput} from '@mui/material';

//npm install @mui/material @emotion/react @emotion/styled

//paste this in app.css

// .gradient-background {
//     background: linear-gradient(300deg,#e5a1ff,#b68fff,#fb72c3);
//     background-size: 180% 180%;
//     /* color: #fff; */
//     animation: gradient-animation 18s ease infinite;
//   }
  
//   @keyframes gradient-animation {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
  
//   .blurs{
//     background-color: #f7e9fe;
//     padding: 1.5rem;
//     border-radius: 10px;
//     background-blend-mode: hard-light;
//     backdrop-filter: blur(10px);
//     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   }


const compoundFrequencyMap = {
  annually: 1,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

function Calculator() {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [investmentPeriod, setInvestmentPeriod] = useState(0);
  const [compoundFrequency, setCompoundFrequency] = useState('annually');
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [result, setResult] = useState(0);

  const handlePrincipalChange = (event) => {
    setPrincipal(parseFloat(event.target.value));
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const handleInvestmentPeriodChange = (event) => {
    setInvestmentPeriod(parseFloat(event.target.value));
  };

  const handleCompoundFrequencyChange = (event) => {
    setCompoundFrequency(event.target.value);
  };

  const handleMonthlyContributionChange = (event) => {
    setMonthlyContribution(parseFloat(event.target.value));
    if (event.target.value < 0) {
      setPrincipal(principal - (event.target.value * investmentPeriod * 12));
    }
  };

  const calculateCompoundInterest = () => {
    const r = interestRate / 100; // interest rate as a decimal
    const n = 12 / compoundFrequencyMap[compoundFrequency]; // number of times interest is compounded per year
    const t = investmentPeriod; // investment period in years
    const f = compoundFrequencyMap[compoundFrequency]; // number of times interest is compounded per year based on the selected frequency
    const A = principal * Math.pow(1 + r / n, n * t * f); // final amount
    const M = monthlyContribution; // monthly contribution amount
    const B = M * (((1 + r / n) ** (n * t * f) - 1) / (r / n)); // total contribution amount
    setResult((A + B).toFixed(2)); // round to 2 decimal places
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateCompoundInterest();
  };

  return (
    <div className='gradient-background'>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <div className='blurs'>
      <h1>Compound Interest Calculator</h1>
      <form onSubmit={handleSubmit}>
        <Box sx={{ '& > *': { m: 2 } }}>
        <Stack spacing={3} sx={{ justifyContent: 'center', alignItems: 'center'}}>
        <FormControl  sx={{ m: 2 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="principal"
            label="Principal"
            type="number"
            value={principal}
            onChange={handlePrincipalChange}
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            variant="outlined"
            margin="normal"
            sx={{ width: 300 }}
          /> 
          </FormControl>
          <TextField
            id="interestRate"
            label="Interest Rate"
            type="number"
            value={interestRate}
            onChange={handleInterestRateChange}
            variant="outlined"
            margin="normal"
            sx={{ width: 300 }}

          />
          <TextField
            id="investmentPeriod"
            label="Investment Period (years)"
            type="number"
            value={investmentPeriod}
            onChange={handleInvestmentPeriodChange}
            variant="outlined"
            margin="normal"
            sx={{ width: 300 }}

          />
          <TextField
            id="monthlyContribution"
            label="Monthly Contribution"
            type="number"
            value={monthlyContribution}
            onChange={handleMonthlyContributionChange}
            variant="outlined"
            margin="normal"
            sx={{ width: 300 }}

          />
          

          <Select
          
            id="compoundFrequency"
            label="Compound Frequency"
            value={compoundFrequency}
            onChange={handleCompoundFrequencyChange}
            variant="outlined"
            margin="normal"
            sx={{ width: 300 }}

          >
            <MenuItem value="annually">Annually</MenuItem>
            <MenuItem value="quarterly">Quarterly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="daily">Daily</MenuItem>
          </Select>
          
          <Button variant="contained" onClick={handleSubmit}>Calculate</Button>
      </Stack>
       
        </Box>
      </form>
      <div>
        <h2>Result:</h2>
        <p>Final Amount: {result}</p>
        <p>Total Contribution: {(monthlyContribution * investmentPeriod * 12).toFixed(2)}</p>
      </div>
    </div>
    </Box>
    </div>
  );
}

export default Calculator;