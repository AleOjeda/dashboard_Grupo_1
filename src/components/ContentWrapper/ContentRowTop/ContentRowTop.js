import React, { Component } from 'react';
import ContentRowMovies from "../../ContentWrapper/ContentRowTop/ContentRowMovies/ContentRowMovies";
import LastMovieInDb from "../../ContentWrapper/ContentRowTop/LastMovieInDb/LastMovieInDb";
import GenreshInDb from "../../ContentWrapper/ContentRowTop/GenresInDb/GenreshInDb";
import TableMovies from '../../TableMovies';
import PropTypes from 'prop-types';

class ContentRowTop extends Component{
    constructor (props){
        super(props);
        this.state = {
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
              number: 48,
              icon: "fas fa-user"
            }
          ]
        
        const genres = ["Acción", "Animación", "Aventura", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasía", "Infantiles", "Musical"]
        
        let products = [];
        let totalUsers = 0;
        let categories = {};
        //console.log(this.props.products[0]);
        if(this.props.products !== [] && this.props.totalUsers !== 0 && this.props.categories !== {} ){
            products = this.props.products;
            console.log(products);
            totalUsers = this.props.totalUsers;
            categories = this.props.categories;
        }

        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800"> App Dashboard</h1>
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
   
/* ContentRowTop.defaultProps = {
  products: [],
  totalUsers: 1,
  categories: {},
}; */
/* ContentRowTop.propTypes = {
  products: PropTypes.object.isRequired,
  totalUsers: PropTypes.number.isRequired,
  categories: PropTypes.object.isRequired,
}  */
export default ContentRowTop;