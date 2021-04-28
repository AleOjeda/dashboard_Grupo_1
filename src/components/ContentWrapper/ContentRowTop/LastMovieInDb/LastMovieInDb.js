import React, { Component } from 'react';
import PropTypes from 'prop-types';
class LastMovieInDb extends Component{
    constructor (props){
        super(props);
        this.state = {
            //lastProduct : this.props.products[this.props.products.length]
        }
    }
    
    render (){
        let totalProducts = this.props.products.length;
        let lastProduct = this.props.products[totalProducts -1];
        return (
            /* <!-- Last Movie in DB --> */
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "20rem"}} src={`${lastProduct.image}`} alt=" Star Wars - Mandalorian "/>
                        </div>
                        <p>{lastProduct.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={`${lastProduct.detail}`}>View movie detail</a>
                    </div>
                </div>
                {/* <!-- End content row last movie in Data Base --> */}
            </div>
        )
    }
}
LastMovieInDb.propTypes = {
    products: PropTypes.array.isRequired,
} 

    
export default LastMovieInDb;