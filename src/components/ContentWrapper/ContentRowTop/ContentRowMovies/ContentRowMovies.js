import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
class ContentRowMovies extends Component{
    constructor (props){
        super(props);
        this.state = {
        }
    }
    //card tiene title style number icon
    render (){
        return (
/*             <!-- Content Row Movies--> */
            <div className="row">
                {/* <!-- Movies in Data Base --> */}                
                {/* <!-- Total awards --> */}
                {/* <!-- Actors quantity --> */}
                {this.props.cards.map((card,i) => (
                    <Card key={card + i} {...card} />
                    )
                )}
                
            </div>
            /* <!-- End movies in Data Base --> */
        )
    }

}
ContentRowMovies.propTypes = {
    cards: PropTypes.array.isRequired,
} 

ContentRowMovies.defaultProps = {
    cards : ["Cargando"]
};

export default ContentRowMovies;