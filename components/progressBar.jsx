import React,{useEffect,useState,useRef} from 'react';
import { useSelector } from "react-redux";
import ProgressBar from 'react-customizable-progressbar'
import House from "../icons/house.svg"
import MiniHouse from "../icons/miniHouse.svg"
import ProgressBarEnd from "../icons/progressbar.svg"
import { TextField } from '@mui/material';
import Envelope from "../icons/envelope.svg"
import useStyles from "../customHooks/useStyles"
import animateCSS from "../customHooks/useClass"
import LinearProgress from '@mui/material/LinearProgress';
import CountUp, { useCountUp } from 'react-countup';

const progressBar = () =>{
    const step = useSelector(state => state.step) 
    const classes = useStyles()

    const cout = useRef(null)

    const { countUp, start, pauseResume, reset, update } = useCountUp({ 
        ref: cout, 
        start:12,
        end: 84,
        duration: 2,
        delay: 1000
    });


    const counter = () =>{
        switch(step){
            case 1:
                return 12
            case 2:
                return 12
            case 3:
                return 22
            case 4:
                return 36
            case 5:
                return 48
            case 6:
                return 60
            case 7:
                return 72
            case 8:
                return 84
            case 9:
                return 100
        }
    }
    useEffect(() =>{
        const progress = document.querySelector('.bar__house__progress')       
        switch(step) {
            case 1:
               return progress.style.clipPath = 'inset(170px 0px 0px 0px)'
            case 3:   
                return progress.style.clipPath = 'inset(155px 0px 0px 0px)'
            case 4:      
                return progress.style.clipPath = 'inset(145px 0px 0px 0px)'
            case 5:            
                return progress.style.clipPath = 'inset(109px 0px 0px 0px)'
            case 6:             
                return progress.style.clipPath = 'inset(47px 0px 0px 0px)'
            case 7:              
                return progress.style.clipPath = 'inset(31px 0px 0px 0px)'
            case 8:              
                return progress.style.clipPath = 'inset(0px 0px 0px 0px)'
        }
        
    },[step])
    useEffect(() => {
        const progressLine = document.querySelector('.progress__bar__line__value')  
        animateCSS('.title__step', 'fadeInUp')
        animateCSS('.text__step', 'fadeInUp')   
        switch(step) {
            case 1:
                return progressLine.style.transform = "translateX(-86%)"
            case 3:
               return progressLine.style.transform = "translateX(-76%)"
            case 4:
                return progressLine.style.transform = "translateX(-62%)"
            case 5:
                return progressLine.style.transform = "translateX(-50%)"
            case 6:
               return progressLine.style.transform = "translateX(-38%)"
            case 7:
                return progressLine.style.transform = "translateX(-26%)"
            case 8:
                return progressLine.style.transform = "translateX(-14%)"
            case 9:
                return progressLine.style.transform = "translateX(0%)"
        }
    },[step])

    const textContent = () =>{
        switch(step){          
            case 2:
                return(
                    <>
                        <div className="title__step">First step</div>
                        <div className="text__step">Use your information for see what options do you have</div>
                    </>        
            )
            case 3:
                return(
                    <>
                        <div className="title__step">First step</div>
                        <div className="text__step">There is still a little bit more and the most interesting</div>
                    </>        
            )
            case 4:
                return(
                    <>
                        <div className="title__step">Second step</div>
                        <div className="text__step">Other important details</div>
                    </>        
            )
            case 5:
                return(
                    <>
                        <div className="title__step">Third step</div>
                        <div className="text__step">Summary of your savings and investments</div>
                    </>
                )
            case 6:
                return(
                    <>
                        <div className="title__step">Third step</div>
                        <div className="text__step">Please let us know about your assets and liabilities</div>
                    </>
                )
            case 7:
                return(
                    <>
                        <div className="title__step">Third step</div>
                        <div className="text__step">Retirement Funds/ IRA</div>
                    </>
                )
            case 8:
                return(
                    <>
                        <div className="title__step">Third step</div>
                        <div className="text__step">Do you own any real estate?</div>
                    </>
                )
            case 9:
                return(
                    <>
                    <div className="title__step ">Finished</div>
                    <div className="text__step">Done with the short summary!</div>
                    <div className="text__step__info animate__animated animate__fadeInUp">
                        To put offers on many NYC properties, you’ll need a REBNY financial statement. Please click here to receive your completed form by email. We will also include a curated list of options and alternatives. You may be be sharing the summarized information with a licensed real estate broker (in small print) 
                    </div>
                    <label className="step__label animate__animated animate__fadeInUp">
                        <div className="step__label__icon"><Envelope/></div>
                        <span className="step__label__text exception">Current market value</span>        
                    </label>
                    <div className="input__step animate__animated animate__fadeInUp">
                        <TextField
                            type="text"                
                            variant="standard"
                            autoComplete='off' 
                            sx={{
                                width:"100%",
                            }} 
                            InputProps={{className: classes.send}}
                            
                        ></TextField>
                    </div>
                    <div className="step__button animate__animated animate__fadeInUp">
                        <button className="step__button__text">Send</button>
                    </div>
                    </>
                )
        }
    }
    return (    
      <>
      
        <div className="progress"> 
        
        <div className='pagination__exception'>
            <ul className="pagination__list">
                <li className={`pagination__link ${step == 1 ? "active" : step === 2 ? "active" : step === 3 ? "active" : step === 4 ? "active next":step === 5 ? "active next":step === 6 ? "active next":step === 7 ? "active next":step === 8 ? "active next":step === 9 ? "active next":""}`}>
                    01
                </li>
                <li className={`pagination__link ${ step === 4 ? "active":step === 5 ? "active next":step === 6 ? "active next":step === 7 ? "active next":step === 8 ? "active next":step === 9 ? "active next":""}`}>
                    02
                </li>
                <li className={`pagination__link ${step === 5 ? "active":step === 6 ? "active next":step === 7 ? "active next":step === 8 ? "active next":step === 9 ? "active next":""}`}>
                    03
                </li>
                <li className={`pagination__link ${step === 7 ? "active":step === 8 ? "active":step === 9 ? "active next":""}`}>
                    04
                </li>
            </ul>
        </div>
       
           <div className="step__content">
               {step == 1 ? <>
                           <div className="title__step animate__animated animate__fadeInUp">First step</div>
                           <div className="text__step animate__animated animate__fadeInUp ">
                              Use your information for see what options do you have                           
                            </div>
                       </>:
               textContent()}
           </div>
           <div className={`progress__bar ${step == 9 ? "absolute":""}`}>
               <div className="progress__bar__track">
               {step == 9 ?  <ProgressBarEnd/>:
                   <ProgressBar
                       className="your-indicator"
                       radius={180}
                       progress={counter()}
                       strokeWidth={25}
                       strokeColor="#FFB80B"
                       strokeLinecap="butt"
                       trackStrokeWidth={25}
                       trackStrokeLinecap="butt"
                       trackStrokeColor="#32343A"     
                       cut={0}
                       rotate={270}
                       pointerRadius={14}
                       pointerStrokeWidth={8}
                       pointerStrokeColor="#32343A"              
                   >
               </ProgressBar>        
               }
               </div>  
               {step != 9 ? <div className="progress__bar__house">
                   <div className="bar__house__img">
                     <House/>
                   </div>
                   <div className="bar__house__progress">
                        <svg width="204" height="86" viewBox="0 0 204 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M101.409 -5.00124C90.5252 5.96327 79.8595 16.7986 69.113 27.5047C49.9291 46.7316 30.7211 65.9343 11.4888 85.1128L4.27867 77.8462L0.144775 72.8888C12.7241 60.3686 25.2765 47.8216 37.802 35.2477L94.0051 -20.9313C104.364 -31.2821 99.4551 -31.5486 109.435 -20.8102C121.602 -7.70603 134.682 4.51802 147.31 17.1781C148.238 18.1066 149.239 18.9705 151.137 20.7226C151.137 16.2173 151.137 12.7131 151.137 9.20902C151.137 9.20902 154.447 9.13635 159.477 9.20902C164.507 9.28169 167.656 9.38665 167.656 9.38665C167.656 16.9197 167.907 24.4689 167.567 31.9939C167.382 36.1762 168.924 38.9698 171.806 41.7796C182.496 52.187 192.976 62.8124 203.521 73.3732L200.526 76.9258C195.617 81.8428 192.137 85.6134 192.137 85.6134C182.803 76.3202 173.566 66.9544 164.217 57.6369C144.645 38.0279 125.066 18.4322 105.478 -1.14994C104.3 -2.36104 102.992 -3.50755 101.409 -5.00124Z" fill="#FFB80B"/>
                        </svg>
                        <svg width="150" height="88" viewBox="0 0 150 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.307 87.1538C41.6973 87.1538 26.0875 87.1538 10.4778 87.1538C4.01858 87.1538 0.942383 87.1538 0.942383 87.1538C0.942383 62.8026 0.942383 29.1097 0.942383 4.75041L1.07964 0.592285C4.82598 0.592285 17.4699 0.802217 17.4699 0.802217C17.4699 2.47354 17.4053 4.50011 17.4134 6.35713C17.4618 25.8639 17.4618 45.3761 17.4134 64.8937V70.0288H50.5976L60.9 69.9642C70.3143 69.9642 90.3136 70.0449 99.736 70.0692H133.203V65.3459C133.203 45.5645 133.154 25.7832 133.259 6.00187C133.259 3.80574 133.34 2.65924 133.34 0.713403H149.827C149.868 25.7428 149.827 62.1243 149.763 87.1538C149.763 87.1538 146.452 87.0407 141.543 87.073C124.857 87.1753 108.171 87.1753 91.4843 87.073" fill="#FFB80B"/>
                        </svg>
                   </div>
                   <div className="bar__house__number">
                        {counter()}%
                    </div>   
                    <div className="bar__number">
                        <span>100%</span>
                        <span className={`bar__number__line ${step == 1 ? 'active':step == 2 ? 'active':step == 3 ? 'active':step == 4 ? 'active':step == 5 ? 'active':step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>12%</span>
                        <span className={`bar__number__line ${step == 3 ? 'active':step == 4 ? 'active':step == 5 ? 'active':step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>22%</span>
                        <span className={`bar__number__line ${step == 4 ? 'active':step == 5 ? 'active':step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>36%</span>
                        <span className={`bar__number__line ${step == 5 ? 'active':step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>48%</span>
                        <span className={`bar__number__line ${step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>60%</span>
                        <span className={`bar__number__line ${step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>72%</span>
                        <span className={`bar__number__line ${step == 8 ? 'active':step == 9 ? 'active':''}`}>84%</span>    
                    </div>   
                    
               </div>:""}
               
               <div className="filter__cicle">
               <svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">

<defs>
<filter id="filter0_i_461_5623" x="0" y="0" width="485" height="480" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_461_5623"/>
</filter>
</defs>
                </svg>
               </div>
           </div>   
          
       </div>
       
       <div className="progress__bar__line">
           <LinearProgress variant="determinate" value={counter()} valueBuffer={100}
               sx={{
                   background:'#292B2F',
                   height:'20px',
                   "& .MuiLinearProgress-bar":{
                       background:'#FFB80B'
                   } 
               }}
           />
            <div className="progress__bar__line__value">
                {counter()}%
                <div className="progress__bar__line__icon">
                    <MiniHouse></MiniHouse>
                </div>
            </div>
            <div className="bar__line__number">
                <span className={`line__number ${step == 1 ? 'active':step == 3 ? 'active':step == 4 ? 'active':step == 5 ? 'active':step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>12%</span>
                <span className={`line__number ${step == 3 ? 'active':step == 4 ? 'active':step == 5 ? 'active':step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>22%</span>
                <span className={`line__number ${step == 4 ? 'active':step == 5 ? 'active':step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>36%</span>
                <span className={`line__number ${step == 5 ? 'active':step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>48%</span>
                <span className={`line__number ${step == 6 ? 'active':step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>60%</span>
                <span className={`line__number ${step == 7 ? 'active':step == 8 ? 'active':step == 9 ? 'active':''}`}>72%</span>
                <span className={`line__number ${step == 8 ? 'active':step == 9 ? 'active':''}`}>84%</span>
            </div>
        </div>
        
      </>  
    )
}
export default progressBar;