import React from "react";
import DataTable, { createTheme } from 'react-data-table-component';
const Grid = ({ columns,rows,title, progresspending}: any) => {
  console.log("progress = "+progresspending);
  return (
    <DataTable
      //title={title}
      columns={columns}
      theme="coolDerby"
      data={rows}            
      highlightOnHover={true}
      selectableRows={false}
      pagination={true}  
      progressPending = {progresspending}   
    />
  )
}
export default Grid;
