import React, { Component } from 'react';

class GenreshInDb extends Component{
    constructor (props){
        super(props);
        this.state = {
            genresh: []
        }
    }
//Llamado a la API
apiCall(url, handler){
    fetch(url)
        .then(response => response.json())
        .then(data => handler(data))
        .catch(error => console.log(error))
}

//Método que necesito llamar una vez que renderice por primera vez
bringGenresh(){
    this.apiCall("http://localhost:3000/api/category/all", this.showGenresh)
}
//Método que utilizo una vez renderizada la vista por primera vez
componentDidMount(){
    this.bringGenresh()
}
//Método para colocar los generos traidos de la API en el estado
showGenresh= (data) => {
    let genreshDef = data.data.map( element => element.category)
    
    this.setState(
        {
            genresh: genreshDef
        }
    )
}
//Luego de actualizarse el estado:
componentDidUpdate(){
    alert("Generos actualizados");
}

    render (){
        let genres;
        if( this.state.genresh == []){
            genres = ["Cargando"]
        } else {
            genres = this.state.genresh
        }
        return (
            <div className="col-lg-6 mb-4">						
            {/* <!-- Genres in DB --> */} 
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 onClick={()=>this.bringGenresh()} className="m-0 font-weight-bold text-gray-800">{/* {this.state.genresh} */}Genres in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {/* {this.props.genres.map((genre,i) => ( */}
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