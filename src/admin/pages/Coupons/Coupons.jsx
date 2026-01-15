import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import styled from '@emotion/styled';
import { Delete } from '@mui/icons-material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const AccountStatus = [
  {status: 'PENDING_VERIFICATION', title: 'Pending Verification', description: ''},
  {status: 'ACTIVE', title: 'Active', description: ''},
  {status: 'SUSPENDED', title: 'Suspended', description: ''},
  {status: 'DEACTIVATED', title: 'Deactivated', description: ''},
  {status: 'BANNED', title: 'Banned', description: ''},
  {status: 'CLOSED', title: 'Closed', description: ''}

]

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
];
const Coupons = () => {
  const [accountStatus, setAccountStatus] = useState('ACTIVE');

  const handleChange = (event) => {
    setAccountStatus(event.target.value);
  };
  return (
    <>
      <div className='pb-5 w-60'>
        <FormControl fullWidth> 
          <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={accountStatus}
            label="Account Status"
            onChange={handleChange}
          >
            {AccountStatus.map((item)=><MenuItem value={item.status}>{item.title}</MenuItem>)}
            
            
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Coupon Code</StyledTableCell>
            <StyledTableCell>Start Date</StyledTableCell>
            <StyledTableCell>End Date</StyledTableCell>

            <StyledTableCell align="right">Min Order Value</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>

              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>

              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right"><Button><Delete/></Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    
  )
}

export default Coupons
