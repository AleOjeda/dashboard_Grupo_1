import React from 'react';
import TableRowMovies from '../ProductsTable/TableRowMovies';
//import "bootstrap/dist/css/bootstrap.min.css"
//let totalProducts = this.props.products.length;
function TableMovies(props) {
    console.log(props.products)
    let cells = props.products;

    return (
        <>
        <table className ="table /* striped bordered hover */">
            <thead>
                <tr>
                <th>ID</th>
                <th>Marca</th>
                <th>Descripción</th>
                <th>Categoria</th>
                </tr>
            </thead>
            {cells.map((cell,i) => (
                    <TableRowMovies key={cell + i} {...cell} />
                    )
                )}
            {/* <TableRowMovies cells = {cells}/> */}
        </table>
        </>
        
    )
    
}
export default TableMovies;

/* import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class TableMovies extends Component {
    render() {
      return (
        <div>
            <BootstrapTable data={this.props.data}>
                <TableHeaderColumn isKey dataField='id'>
                ID
                </TableHeaderColumn>
                <TableHeaderColumn dataField='name'>
                Name
                </TableHeaderColumn>
                <TableHeaderColumn dataField='value'>
                Value
                </TableHeaderColumn>
            </BootstrapTable>
        </div>
      );
    }
  }
   
  export default TableMovies; */