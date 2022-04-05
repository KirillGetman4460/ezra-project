import React,{useEffect} from 'react'
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import NextButton from "./nextButton.jsx"
import BackButton from "./backButton.jsx"
import { useDispatch } from "react-redux";
import Bonus from "../../icons/bonus.svg"
import Rental from "../../icons/rental.svg"
import Base from "../../icons/base.svg"
import useStyles from "../../customHooks/useStyles"
import animateCSS from "../../customHooks/useClass"

const stepOne = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const classes = useStyles()
    const onSubmit = data => {
        dispatch({type:'SEND_FORM',payload:data})
        dispatch({type:"ADD_STEP"})             
    };

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="form animate__animated animate__fadeInUp">        
                <label className="form__label animate__animated animate__fadeInUp">
                    <div className="form__label__icon"><Base></Base></div>
                    <span className="form__label__text exception">Base Salary (per year)</span>
                </label>
                <div className="form__input animate__animated animate__fadeInUp">
               
                <TextField                        
                    type="text"
                    variant="standard"
                    autoComplete='off'   
                    className={classes.text}
                    InputProps={{className: classes.input}}
                    {...register("base", {required: true})}
                    error={!!errors.base}
                ></TextField>
                {errors.base && <p className="errors animate__animated animate__fadeInUp">This field is obligatory</p>}
                
                </div>  
                <label className="form__label animate__animated animate__fadeInUp">
                    <div className="form__label__icon"><Bonus></Bonus></div>
                    <span className="form__label__text exception">Bonus & Commissions (per year) </span>
                </label>
                <div className="form__input animate__animated animate__fadeInUp">
                    <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'   
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("bonus", {required: true})}
                        error={!!errors.bonus}
                        >
                    </TextField>
                    {errors.bonus && <p className="errors animate__animated animate__fadeInUp">This field is obligatory</p>}
                </div>
                <label className="form__label animate__animated animate__fadeInUp">
                    <div className="form__label__icon"><Rental></Rental></div>
                    <span className="form__label__text exception">Rental / interest / investment income </span>
                </label>
                <div className="form__input animate__animated animate__fadeInUp" >
                    <TextField              
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                         
                        {...register("rental", {required: true})}
                        error={!!errors.rental}
                        >
                    </TextField>
                    {errors.rental && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>}  
                </div>        
                <NextButton onclick={() => onSubmit()}></NextButton> 
                <span className="form__info animate__animated animate__fadeInUp">This information is not shared with anyone and is used to automatically assess your purchasing power</span>
            </form>         
    )
}
export default stepOne;