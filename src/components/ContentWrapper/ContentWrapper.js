import React, { Component } from 'react';
import Footer from "../ContentWrapper/Footer/Footer";
import TopBar from "../ContentWrapper/TopBar/TopBar";
import ContentRowTop from "../ContentWrapper/ContentRowTop/ContentRowTop";
class ContentWrapper extends Component{
    constructor (props){
        super(props);
        this.state = {
            valores: ""
        }
    }

    render (){
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                </div>
                <Footer />
            </div>
        )
    }
}
    
export default ContentWrapper;
