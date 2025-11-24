import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {centros} from './lista-de-centros-de-votacion';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const ListaDeCentros = ()=>{

   const [distrito, setDistrito] = React.useState('TODAS');

  const handleChange = (event) => {
    setDistrito(event.target.value);
  };

        return (
        <>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Distrito</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={distrito}
          label="Distrito"
          onChange={handleChange}
        >
          <MenuItem value={'TODAS'}>Todas</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        <MenuItem value={'ESPECIAL'}>Especial</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <TableContainer>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{fontWeight: 'bold'}}>Casilla</TableCell>
            {!distrito && <TableCell align="left" style={{fontWeight: 'bold'}}>Distrito</TableCell>}
            <TableCell align="left" style={{fontWeight: 'bold'}}>Plantel</TableCell>
            <TableCell align="left" style={{fontWeight: 'bold'}}>Ubicación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                centros.map((centro)=>(
                    ((centro?.distrito === distrito) || distrito === 'TODAS') && <TableRow
              key={centro.casilla}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" align="left">
                    {centro.casilla}
                </TableCell>
                {!distrito && <TableCell align="left">{centro.distrito}</TableCell>}
                <TableCell align="left">{centro.plantel}</TableCell>
                <TableCell align="left">{centro.direccion}</TableCell>
            </TableRow>
                ))
            }
        </TableBody>
        </Table>
    </TableContainer>
    </>
    )
}