import {proyectos} from './lista-proyectos';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = ['Folio', 'Distrito Local', 'Nombre del proyecto']
export const Lista = ()=>{
    return <TableContainer>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Folio</TableCell>
            <TableCell align="right">Distrito</TableCell>
            <TableCell align="left">Nombre del Proyecto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                proyectos.map((proyecto)=>(
                    <TableRow
              key={proyecto.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" align="right">
                    {proyecto.id}
                </TableCell>
                <TableCell align="right">{proyecto.distrito}</TableCell>
                <TableCell align="left">{proyecto.nombre}</TableCell>
            </TableRow>
                ))
            }
        </TableBody>
        </Table>
    </TableContainer>
}