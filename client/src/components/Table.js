import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title'},
  { field: 'description', headerName: 'Description'},
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    width: 90,
  },
  {
    field: 'userId',
    headerName: 'User Id',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, title: 'title1', description: 'desc1', status: 'To Do', userId: 1 },
  { id: 2, title: 'title2', description: 'desc2', status: 'To Do', userId: 1 },
];

const paginationModel = { page: 0, pageSize: 5 };

const Table = () => {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default Table;
