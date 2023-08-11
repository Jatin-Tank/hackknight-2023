import React, { useState } from 'react';
import { TextField, Slider, Select, MenuItem,Box, Button, Typography, Card, Stack,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './CompoundInt.css'

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [amountNeeded, setAmountNeeded] = useState(1000000);
  const [retirementSavings, setRetirementSavings] = useState(500000);
  const [investmentReturn, setInvestmentReturn] = useState(5);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);

  const handleCurrentAgeChange = (event) => {
    setCurrentAge(event.target.value);
  };

  const handleRetirementAgeChange = (event) => {
    setRetirementAge(event.target.value);
  };

  const handleAmountNeededChange = (event) => {
    setAmountNeeded(event.target.value);
  };

  const handleRetirementSavingsChange = (event) => {
    setRetirementSavings(event.target.value);
  };

  const handleInvestmentReturnChange = (event, value) => {
    setInvestmentReturn(value);
  };

  const calculateRetirementSavings = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthlyInvestment = (amountNeeded - retirementSavings) * (investmentReturn / 100) / 12 / ((1 + (investmentReturn / 100) / 12) ** (yearsToRetirement * 12) - 1);
    const yearlyInvestment = monthlyInvestment * 12;
    setMonthlySavings(monthlyInvestment.toFixed(2));
    setYearlySavings(yearlyInvestment.toFixed(2));
  };

  return (
    <div className='retire' style={{height:"100vh", paddingTop:'20px'}}>
    <Card className='retire1' style={{}} sx={{maxWidth: '800px',justifyContent: 'center', alignItems: 'center', margin:'auto'}}>
      <Typography variant="h4" gutterBottom>
        Retirement Calculator
      </Typography>
      <form style={{marginTop:'40px'}}>
      <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', marginBottom:'2em'}}>
        <TextField
          label="Current Age"
          type="number"
          value={currentAge}
          onChange={handleCurrentAgeChange}
          sx={{ width: 300 }}
          
        />
        <TextField
          label="Planned Retirement Age"
          type="number"
          value={retirementAge}
          onChange={handleRetirementAgeChange}
          sx={{ width: 300 }}
        />
        <TextField
          label="Amount Needed at Retirement Age"
          type="number"
          value={amountNeeded}
          onChange={handleAmountNeededChange}
          sx={{ width: 300 }}
        />
        <TextField
          label="Retirement Savings Now"
          type="number"
          value={retirementSavings}
          onChange={handleRetirementSavingsChange}
          sx={{ width: 300 }}
        />
        <Typography id="investment-return-slider" gutterBottom>
          Average Investment Return (%)
        </Typography>
        <TextField
          label="Investment Return"
          type="number"
          value={investmentReturn}
          onChange={handleInvestmentReturnChange}
          sx={{ width: 300 }}
          InputProps={{
            endAdornment: <Typography variant="body1">%</Typography>,
          }}
        />
        <Button variant="contained" onClick={calculateRetirementSavings}>
          Calculate
        </Button>
    </Stack>

      </form>

      <TableContainer component={Paper} sx={{border:'none', maxWidth: '800px',justifyContent: 'center', alignItems: 'center', margin:'auto'}}>
      <Typography variant="h5" gutterBottom>
          You Can Follow these retirement plans
          </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: '1px solid black' }}>Monthly Savings</TableCell>
              <TableCell sx={{ border: '1px solid black' }}>Yearly Savings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: '1px solid black' }}>You need to save <b>₹{monthlySavings}</b> monthly to reach target at retirement age.</TableCell>
              <TableCell sx={{ border: '1px solid black' }}>You need to save <b>₹{yearlySavings} </b>yearly to reach target at retirement age.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
    </div>
  );
};

export default RetirementCalculator;
