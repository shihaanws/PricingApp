import './App.css';
import React, {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from "./themes.js";
import circles from "./pattern-circles.svg"
import DarkModeToggle from "react-dark-mode-toggle";
import Switch1 from 'react-input-switch';
import tick from "./icon-check.svg";
import Slider from '@material-ui/core/Slider';


function App() {


  const [theme,setTheme] = useState(()=>false);

  const styledApp= styled.div``

  const themeToggler =()=>{
    theme === false ? setTheme(true) : setTheme(false)
   
  }





  

  return (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme } >
      <GlobalStyles/>
      <styledApp>
        <div className="app">

          <div className="togg" >
          <DarkModeToggle 
          onChange={()=>themeToggler()}
          checked={theme}
          size={80}
        />
          </div>
       
         
        
        <div  className="circle-container">
          <img className="circles" src={circles}></img>
          <div className="centered">
            <div >Simple traffic-based pricing</div>
            <div className="title">Sign-up for our 30-day trial.No credit card required.</div>
          </div>
          
        </div>
                  <div  className="parent">
                    {/* <div className="flexbox"> */}
                      <div className="firstThree">
                        <div className="firstTwo">
                          <div className="pageviews">100K PAGE VIEWS</div>

                            <div className="seconder">
                              <div id="content-breadcrumb">
                                <span id="active">
                                $16.00
                                </span>
                                  /month 
                              </div> 

                              <div class="slidecontainer" id="smallslider">
                                <input type="range" min="1" max="100" class="slider" />
                              </div> 
                            </div>

                            
                          </div>
                          
                        
                          <div class="slidecontainer" id="bigslider">
                                <input type="range" min="1" max="100" class="slider" />
                              </div> 

                             

                        <div className="billing"><span>Monthly Billing</span>
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider1 round"></span>
                          </label>
                        <span>Yearly billing</span>
                        
                        <span className="discount">
                        <span class="full-text">25% discount</span>
                        <span class="short-text">-25%</span>
                        </span>
                        </div>
                        <hr className="new" />
                      <div className="underline-part">
                        <div className="benefits">
                          <div><img src={tick} width="12px" style={{padding: "2px 12px",}}/>Unlimited Websites</div>
                          <div><img src={tick} width="12px" style={{padding: "2px 12px",}} />100% data ownership</div>
                          <div><img src={tick} width="12px" style={{padding: "2px 12px",}} />Email reports</div>
                        </div>

                        <div className="trials">Start my trial</div>
                      </div>
                        
                       

                        


                       
                      </div>
                    {/* </div> */}
                </div>
        </div>
      </styledApp>
       
    </ThemeProvider>
    
  );
}

export default App;




