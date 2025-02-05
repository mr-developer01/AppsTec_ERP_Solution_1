import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router';

  const columns = [
    { field: 'col1', headerName: 'S.No', width: 150 },
    { field: 'col2', headerName: 'First Name', width: 150 },
    { field: 'col3', headerName: 'Last Name', width: 150 },
    { field: 'col4', headerName: 'Email Address', width: 150 },
    { field: 'col5', headerName: 'Address', width: 150 },
    { field: 'col6', headerName: 'Active', width: 150 },
  ];
  
  

const AllUsers = () => {
  const [rows, setRows] = useState([]);

  console.log(rows)

  useEffect(() => {
    setRows(JSON.parse(localStorage.getItem('userName')))
  }, [])

  if(rows.length === 0){
    return <h1>Loading...</h1>
  }
    return (
        <div >
          <DataGrid rows={rows} columns={columns} />
          <Link to='/create'>Add Users</Link>
        </div>
      );
}

export default AllUsers;