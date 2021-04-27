import React, { Component } from 'react';
import Footer from "../ContentWrapper/Footer/Footer";
import TopBar from "../ContentWrapper/TopBar/TopBar";
import ContentRowTop from "../ContentWrapper/ContentRowTop/ContentRowTop";
class ContentWrapper extends Component{
    constructor (props){
        super(props);
        this.state = {
        }
    }

    //Llamar API
    apiCall(url, handler, state){
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data, state))
            .catch(error => console.log(error))
    }

    //Actualizar state
    stateUpdate = (data, state ) => {
        this.setState({
            [state] : data
        })
    }
    //Component Mount
    componentDidMount(){
        let ApiProducts = "http://localhost:3000/api/product/";
        let ApiUsers = "http://localhost:3000/api/user/";
        this.apiCall(ApiProducts, this.stateUpdate, "products")
        this.apiCall(ApiUsers, this.stateUpdate, "users");
    }
    
    render (){
        let products= [{"key":1},{"ket":2}];
        if(this.state.products && (this.state.products.data)){ 
            products = this.state.products.data;
        }
        let users = [];
        (this.state.users && this.state.users.users) && (users = this.state.users.users);
        let categories = [];
        (this.state.products && this.state.products.countByCategory) && (categories = new Array(this.state.products.countByCategory));
        let totalUsers = users.length;
        
        
        ////////////////////////////////////////////PREGUNTAR POR EL ERROR EN poner products... "error en el children".
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContentRowTop products={products} totalUsers={totalUsers} categories={categories}/>
                </div>
                <Footer />
            </div>
        )
    }
}
    
export default ContentWrapper;
