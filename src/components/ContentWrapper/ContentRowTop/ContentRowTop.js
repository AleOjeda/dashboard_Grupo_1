import React, { Component } from 'react';
import ContentRowMovies from "../../ContentWrapper/ContentRowTop/ContentRowMovies/ContentRowMovies";
import LastMovieInDb from "../../ContentWrapper/ContentRowTop/LastMovieInDb/LastMovieInDb";
import GenreshInDb from "../../ContentWrapper/ContentRowTop/GenresInDb/GenreshInDb";
class ContentRowTop extends Component{
    constructor (props){
        super(props);
        this.state = {
            valores: ""
        }
    }

    render (){
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                <ContentRowMovies />
                {/* <!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
                        <LastMovieInDb />
                        <GenreshInDb />
                    </div>
            </div>
        )
    }
}
    
export default ContentRowTop;