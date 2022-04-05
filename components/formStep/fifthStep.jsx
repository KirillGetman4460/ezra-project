import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import NextButton from "./nextButton.jsx"
import BackButton from "./backButton.jsx"
import { useDispatch } from "react-redux";
import useStyles from "../../customHooks/useStyles"

const FifthStep = () =>{
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
                        <span className="form__label__text">401K</span>
                    </div>
                </label>
                <div className="form__input">
                <TextField                 
                    type="text"
                    variant="standard"
                    autoComplete='off'
                    className={classes.text}
                    InputProps={{className: classes.input}} 
                    {...register("num", {required: true})}
                    error={!!errors.num}
                    >
                </TextField>
                {errors.num && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
                
                <label className="form__label">
                    <span className="form__label__text">KEOGH</span>
                </label>
                <div className="form__input">
                <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("keogh", {required: true})}
                        error={!!errors.keogh}
                        >
                </TextField>
                {errors.keogh && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
               

                <label className="form__label">
                    <span className="form__label__text">IRA</span>
                </label>
                <div className="form__input">
                <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("ira", {required: true})}
                        error={!!errors.ira}
                        >
                </TextField>
                {errors.ira && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
                <label className="form__label">
                    <span className="form__label__text">Profit Sharing/Pension Plan</span>
                </label>
                <div className="form__input">
                <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}} 
                        {...register("profit", {required: true})}
                        error={!!errors.profit}
                        >
                </TextField>
                {errors.profit && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
                
                <div className="form__buttons">  
                    <BackButton step={6}/>           
                    <NextButton onclick={() => onSubmit()}></NextButton>
                </div>
            </form>
    )
}
export default FifthStep;