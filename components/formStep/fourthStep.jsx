import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import NextButton from "./nextButton.jsx"
import BackButton from "./backButton.jsx"
import useStyles from "../../customHooks/useStyles"

const FourthStep = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const classes = useStyles()
    const dispatch = useDispatch()
    const onSubmit = data => {
        dispatch({type:'SEND_FORM',payload:data})
        dispatch({type:"ADD_STEP"})
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form animate__animated animate__fadeInUp">
                <div className="form__title">
                    Investments
                </div>
                <label className="form__label">
                    <div className="form__label__title">          
                        <span className="form__label__text">Stocks</span>
                    </div>
                </label>
                <div className="form__input">
                <TextField                 
                    type="text"
                    variant="standard"
                    autoComplete='off'
                    className={classes.text}
                    InputProps={{className: classes.input}}
                    {...register("stocks", {required: true})}
                    error={!!errors.stocks}
                    >
                </TextField>
                {errors.stocks && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
                <label className="form__label">
                    <span className="form__label__text">Bonds</span>
                </label>
                <div className="form__input">
                <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("bonds", {required: true})}
                        error={!!errors.bonds}
                        >
                </TextField>
                {errors.bonds && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>

                <label className="form__label">
                    <span className="form__label__text">Investment in Own Business</span>
                </label>
                <div className="form__input">
                <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("investment", {required: true})}
                        error={!!errors.investment}
                        >
                </TextField>
                {errors.investment && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>}  
                </div>
                
                <label className="form__label">
                    <span className="form__label__text">Accounts and Notes Receivable</span>
                </label>
                <div className="form__input">
                <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}} 
                        {...register("accounts", {required: true})}
                        error={!!errors.accounts}
                        >
                </TextField>
                {errors.accounts && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>}  
                </div>           
                <div className="form__buttons">  
                    <BackButton step={5}/>           
                    <NextButton onclick={() => onSubmit()}></NextButton>
                </div>           
            </form>
    )
}
export default FourthStep;