import React from 'react';

function TableRowMovies ({cells}) {
    return (
        <>
        {cells.map((cell, i) => (
            <tbody key={cell + i}>
                <tr>
                    <td>{cell.title}</td>
                    <td>{cell.duration}</td>
                    <td>{cell.rating}</td>
                    <td><li>{cell.gender}</li></td>
                    <td>{cell.awards}</td>
                </tr>
            </tbody>
        )
        )}
        </>
    )
}
export default TableRowMovies;