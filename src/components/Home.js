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
    this.mainFillerFunc=this.mainFillerFunc.bind(this)
    this.state={filteredText:'AgeAppropriate'}
    this.match=match
    this.color="red"
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
                <header>
                    <LogoContainer filteredTextFunP={this.filteredTextFun} history={this.props.history}/>
                    <BodyNav/>
                </header>
                <BodySlide/>
                <Product  searchStringP={this.state.filteredText}/>
                <Footer home={0} history={this.props.history}/>
        </div>
        )
    }
}
export default Home;          
 