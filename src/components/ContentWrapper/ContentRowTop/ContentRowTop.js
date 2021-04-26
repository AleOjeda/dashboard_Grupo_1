import React, { Component } from 'react';
import ContentRowMovies from "../../ContentWrapper/ContentRowTop/ContentRowMovies/ContentRowMovies";
import LastMovieInDb from "../../ContentWrapper/ContentRowTop/LastMovieInDb/LastMovieInDb";
import GenreshInDb from "../../ContentWrapper/ContentRowTop/GenresInDb/GenreshInDb";
import TableMovies from '../../TableMovies';
class ContentRowTop extends Component{
    constructor (props){
        super(props);
        this.state = {
            valores: ""
        }
    }
    
    render (){
        const cards = [
            {
              title: "Movies in Data Base",
              style: "primary",
              number: 21,
              icon: "fas fa-film"
            },
            {
              title: "Total awards",
              style: "success",
              number: 79,
              icon: "fas fa-award"
            },
            {
              title: "Actors quantity",
              style: "warning",
              number: 49,
              icon: "fas fa-user"
            }
          ]
        
          const genres = ["Acción", "Animación", "Aventura", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasía", "Infantiles", "Musical"]
        
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                <ContentRowMovies cards={cards}/>
                {/* <!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
                        <LastMovieInDb />
                        <GenreshInDb genres={genres} />
                    </div>
                    <TableMovies />
            </div>
        )
    }
}
    
export default ContentRowTop;