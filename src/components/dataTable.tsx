import React from "react";
import DataTable, { createTheme } from 'react-data-table-component';
const Grid = ({ columns,rows,title}: any,) => {
  return (
    <DataTable
      title={title}
      columns={columns}
      theme="coolDerby"
      data={rows}            
      highlightOnHover={true}
      selectableRows={false}
      pagination={true}
    />
  )
}
const coolDerbyTheme = createTheme('coolDerby', {
  text: {
    primary: '',
    secondary: '#DCAE1D',
  },
  background: {
    default: '#FFFFFF',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#ebedf2',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  }

});
const customStyles = {
  header: {
    style: {
      minHeight: '56px',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: coolDerbyTheme.divider.default,
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: coolDerbyTheme.divider.default,
        borderBottomWidth: "1px",
        fontFamily: "ubuntu-medium, sans- serif",
        fontWeight: 600,
        height: "40px"
      },
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: coolDerbyTheme.divider.default,
        height: "40px",
        fontSize: "0.875rem"
      },
    },
  },
};
export default Grid;
