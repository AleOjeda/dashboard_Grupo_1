import React from 'react';
import TableRowMovies from './TableRowMovies';
//import "bootstrap/dist/css/bootstrap.min.css"

function TableMovies() {

    const cells = [{
        title: "Billy Elliot",
        duration: 123,
        rating: 5,
        gender: ["Drama", "Comedia"],
        awards: 2,
    },
    {
        title: "Alicia en el país de las maravillas",
        duration: 142,
        rating: 4.8,
        gender: ["Drama", "Acción", "Comedia"],
        awards: 3,
    }
    ]

    return (
        <>
        <table className ="table /* striped bordered hover */">
            <thead>
                <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Genero</th>
                <th>Premios</th>
                </tr>
            </thead>
            <TableRowMovies cells = {cells}/>
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