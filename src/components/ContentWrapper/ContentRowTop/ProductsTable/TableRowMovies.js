import React from 'react';

function TableRowMovies (props) {
    //paso ID Brand Description categoria
    let id = props.description;
    let brand = props.name;
    let description = props.description;
    let category = props.categories[0].category;
    
    console.log(id);
    return (
        <>
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{brand}</td>
                    <td>{description}</td>
                    <td>{category }</td>
                </tr>
            </tbody>
        </>
    )
}
TableRowMovies.defaultProps = {
    description: "Cargando",
    name: "Cargando",
    description: "Cargando",
    categories: [{category:"Cargando"}]
}

export default TableRowMovies;