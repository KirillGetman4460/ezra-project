import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import NextButton from "../formStep/nextButton.jsx"
import { useDispatch } from "react-redux";
import useStyles from "../../customHooks/useStyles"
import BackButton from "./backButton.jsx"
const SeventhStep = () =>{
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
                    <span className="form__label__text">Address</span>
                </label>
                <div className="form__input">
                    <TextField              
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("address", {required: true})}>
                    </TextField>   
                    {errors.address && <p className="errors">This field is obligatory</p>} 
                </div>
                <label className="form__label">
                    <span className="form__label__text">Current market value</span>
                </label>
                <div className="form__input">
                    <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("marketValue", {required: true})}>
                    </TextField>
                    {errors.marketValue && <p className="errors">This field is obligatory</p>}
                </div>
                <label className="form__label">
                    <span className="form__label__text">Income if rented out</span>
                </label>
                <div className="form__input">
                    <TextField  
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("income", {required: true})}
                        error={!!errors.income}
                        >
                    </TextField>
                    {errors.income && <p  className="errors">This field is obligatory</p>}  
                </div>
                <label className="form__label">
                    <span className="form__label__text">Outstanding mortgage</span>
                </label>
                <div className="form__input">
                    <TextField  
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("mortgage", {required: true})}
                        error={!!errors.mortgage}
                        >
                    </TextField>
                    {errors.mortgage && <p  className="errors">Outstanding mortgage</p>}  
                </div>

                <div className="form__buttons">  
                    <BackButton step={7}/>           
                    <NextButton onclick={() => onSubmit()}></NextButton>
                </div>
            </form>   
             
    )
}
export default SeventhStep;