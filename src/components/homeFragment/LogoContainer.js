import {Fragment ,useEffect} from 'react';
import { Link,useParams } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {LocalMallIcon} from "../icons"
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  
  }));
  

  
function LogoContainer(props){
    
    const classes = useStyles();
    function toggle(){
        let element=document.getElementById("LogoContainer__dropDown")
        element.classList.toggle("toggle")
    }
    function filteredTextHolder(e){
        props.filteredTextFunP(e.target.value)
    }
    useEffect(()=>{
        document.getElementById("LogoContainer__cancel").addEventListener("click",toggle)
        document.querySelectorAll(".LogoContainer__menu").forEach((element)=>{
            element.addEventListener("click",toggle)
        })
    },[])
    return(
        <Fragment >
            <div className="LogoContainer LogoContainer-M">
            
                    <h2>NEXAPP  <LocalMallIcon/> </h2>
                    <div className={classes.search} className="search">
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={filteredTextHolder}
                        />
                    </div>
           

                <span className="LogoContainer__menu" id="bar__1"></span>
                <span className="LogoContainer__menu" id="bar__2"></span>
                <span className="LogoContainer__menu" id="bar__3"></span>
                
                <nav role="navigation">
                    <ul  className="LogoContainer__dropDown LogoContainer__dropDown-M" id="LogoContainer__dropDown" >
                        <li className="LogoContainer__dropDown__item">
                            <Link   to={`/`} className="LogoContainer__dropDown__item__link">
                                Home
                            </Link>  
                        </li>
                        <li className="LogoContainer__dropDown__item"> 
                            <Link   to={`/home/CartPurchase`} className="LogoContainer__dropDown__item__link">
                                Cart Purchase
                            </Link>  
                        </li>
                        <li className="LogoContainer__dropDown__item">
                            <Link  to={"/Home/cart"} className="LogoContainer__dropDown__item__link">
                                Cart 
                            </Link>  
                        </li>
                        <div className="LogoContainer__cancel" id="LogoContainer__cancel">
                            <span className="LogoContainer__cancel__cancel__bar1 cancel_1"></span>
                            <span className="LogoContainer__cancel__cancel__bar2 cancel_2"></span>
                        </div>
                    </ul>
                </nav>
             
              
            </div>
           
        </Fragment>
    )
}
export default LogoContainer;