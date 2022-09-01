import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createServerData(serverName, Project, Services) {
    return {serverName, Project, Services};
}

const rows = [
    createServerData('server01', 'Some random project', 'healthy'),
    createServerData('server02', 'Some random project', 'healthy'),
    createServerData('server03', 'Some random project2', 'error'),
    createServerData('server04', 'Some random project3', 'none'),

];

export default function ServerTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Server Name</TableCell>
              <TableCell align="right">Project</TableCell>
              <TableCell align="right">Services</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.serverName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.serverName}
                </TableCell>
                <TableCell align="right">{row.Project}</TableCell>
                <TableCell align="right">{row.Services}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }