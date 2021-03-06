import React, { Component } from 'react';

class GenreshInDb extends Component{
    constructor (props){
        super(props);
        this.state = {
        }
    }

//Luego de actualizarse el estado:
componentDidUpdate(){
 //   alert("Generos actualizados");
}

    render (){
        let genres;
        if( this.props.genres == []){
            genres = ["Cargando"]
        } else {
            genres = this.props.genres
        }
        return (
            <div className="col-lg-6 mb-4">						
            {/* <!-- Genres in DB --> */} 
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {genres.map((genre,i) => (
                                <div key={genre + i} className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {genre}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default GenreshInDb;