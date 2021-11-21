import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } 
from '@mui/material';
import * as services from '../services/index';
// import Table from '@mui/material/Table';

const columns = [
  { id: '#', label: '#' },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'symbol', label: 'Symbol' },
  { id: 'atomic_mass', label: 'Atomic Mass' },
  { id: 'electron_configuration', label: 'Electron Configuration' },
  { id: 'year_discovered', label: 'Year of Discovery'}
];

const MainTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  function getAllElements() {
    return services.getAllElements()
      .then(res => {
        setRows(res.data);
      })
      .catch(err => console.log('Error: ', err));
  }

  useEffect(() => {
    getAllElements();
  }, []);

  console.log('rows: ', rows)

  return (
    <div className="main-table">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
            { rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} 
                    style={{ backgroundColor: `#${row['CPK_hex_color']}` }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {
                            column.id === "#" ? 
                              page*rowsPerPage + (index + 1) : 
                              value
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[rowsPerPage, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default MainTable;