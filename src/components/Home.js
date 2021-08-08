import React,{useState,useEffect} from 'react';
import LogoContainer from "./bodyFragment/LogoContainer";
import Footer from "./bodyFragment/footer";
import BodyNav from "./bodyFragment/bodyNav";
import BodySlide from "./bodyFragment/homeSlide";
import Product from "./bodyFragment/bodyProduct";
import "../styles/style.css";




class Home extends React.Component{
constructor({match}){
    super()
    this.filteredTextFun=this.filteredTextFun.bind(this)
    this.mainFillerFunc=this.mainFillerFunc.bind(this)
    this.state={filteredText:'AgeAppropriate'}
    this.match=match
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
                    <LogoContainer filteredTextFunP={this.filteredTextFun}/>
                    <BodyNav/>
                </header>
                <BodySlide/>
                <Product  searchStringP={this.state.filteredText}/>
                <Footer/>
        </div>
        )
    }
}
export default Home;          
 