import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import NextButton from "./nextButton.jsx"
import { useDispatch } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import BackButton from "./backButton.jsx"
import useStyles from "../../customHooks/useStyles"

const stepThree = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const classes = useStyles()
    const dispatch = useDispatch()
    const onSubmit = data => {
        dispatch({type:'SEND_FORM',payload:data})
        dispatch({type:"ADD_STEP"})
    };
    return (
            <form onSubmit={handleSubmit(onSubmit)} className="form animate__animated animate__fadeInUp">
                <label className="form__label">
                    <div className="form__label__title">          
                        <span className="form__label__text">Are you a defendant in any legal action?</span>
                    </div>
                </label>
                <div className="form__input">
                    <TextField                 
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("defendant", {required: true})}
                        error={!!errors.defendant}
                        >
                    </TextField>   
                    {errors.defendant && <p className="errors">This field is obligatory</p>} 
                </div>
                <label className="form__label">
                    <span className="form__label__text">Do you have any unsatisfied judgments?</span>
                </label>
                <div className="form__input">
                    <TextField                 
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("judgments", {required: true})}
                        error={!!errors.judgments}
                        >
                    </TextField>   
                    {errors.judgments && <p className="errors">This field is obligatory</p>} 
                </div>
                <label className="form__label animate__animated animate__fadeInUp">
                    <span className="form__label__text">Have you ever filed  bankruptcy? When?</span>
                </label>
                <div className="form__input">
                    <TextField                 
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("bankruptcy", {required: true})}
                        error={!!errors.bankruptcy}
                        >
                    </TextField>   
                    {errors.bankruptcy && <p className="errors">This field is obligatory</p>} 
                </div>
                <div className="type">
                    <div className="type__title">
                        Are you selfempoyed?
                    </div>
                    <ul className="type__selfempoyed">
                        <FormControl
                            sx={{
                                width:"100%",            
                            }}
                        >
                            <RadioGroup 
                                sx={{
                                    "flex-direction": "row"
                                }}
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group">
                                <li className="type__list__link">
                                    <FormControlLabel value="Yes" {...register("yes")}
                                        control={<Radio 
                                         sx={{      
                                            '&.Mui-checked': {
                                              color: "#1D1C1C",
                                            }
                                          }}
                                    />} label="Yes" />
                                </li>
                                <li className="type__list__link">
                                    <FormControlLabel value="No" {...register("no")} control=
                                    {<Radio 
                                        sx={{           
                                            '&.Mui-checked': {
                                              color: "#1D1C1C",
                                            },
                                          }}
                                    />} label="No" />
                                </li>
                            </RadioGroup>
                        </FormControl>
                    </ul>
                </div>
                <label className="form__label">
                    <span className="form__label__text">How many years in your line of work?</span>
                </label>
                <div className="form__input">
                    <TextField                 
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("yearsWork", {required: true})}
                        error={!!errors.yearsWork}
                        >
                    </TextField>   
                    {errors.yearsWork && <p className="errors">This field is obligatory</p>} 
                </div>
                <label className="form__label">
                    <span className="form__label__text">How many years with the current employer?</span>
                </label>
                <div className="form__input">
                    <TextField                 
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("yearsEmployer", {required: true})}
                        error={!!errors.yearsEmployer}
                        >
                    </TextField>   
                    {errors.yearsEmployer && <p className="errors">This field is obligatory</p>} 
                </div>  
                <div className="form__buttons">  
                    <BackButton step={3}/>           
                    <NextButton onclick={() => onSubmit()}></NextButton>
                </div>
            </form>
    )
}
export default stepThree;