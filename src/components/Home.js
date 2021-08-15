import React,{useState,useEffect} from 'react';
import LogoContainer from "./homeFragment/LogoContainer";
import Footer from "./homeFragment/footer";
import BodyNav from "./homeFragment/bodyNav";
import BodySlide from "./homeFragment/homeSlide";
import Product from "./homeFragment/bodyProduct";
import "../styles/style.css";





class Home extends React.Component{
constructor({match}){
    super()
    this.filteredTextFun=this.filteredTextFun.bind(this)
    this.cartCount=this.cartCount.bind(this)
    this.mainFillerFunc=this.mainFillerFunc.bind(this)
    this.state={filteredText:'',cartCount:JSON.parse(localStorage.getItem('data')).length}
    
    this.match=match
    this.color="red"
    }
    cartCount(value){
        
        this.setState({cartCount:value})
    }
    filteredTextFun(value){
        this.setState({filteredText:value})
     
    }
    mainFillerFunc(value){
        this.setState({view:value})
    }
    
 
 

     
    render(){
        //let id=this.match.url.slice(6);
        
        return(
            <div className="body">
                <header role="banner">
                    <LogoContainer filteredTextFunP={this.filteredTextFun} history={this.props.history}/>
                    <BodyNav/>
                </header>
                <BodySlide/>
                <main role="main">
                     <Product  searchStringP={this.state.filteredText} cartCountP={this.cartCount}/>
                </main>
                
                <Footer home={0} history={this.props.history}  cartCountP={this.state.cartCount}/>
        </div>
        )
    }
}
export default Home;          
 