import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import NextButton from "./nextButton.jsx"
import BackButton from "./backButton.jsx"
import Typography from '@mui/material/Typography';
import useStyles from "../../customHooks/useStyles"
import Down from "../../icons/down.svg"
const fourStep = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const classes = useStyles()
    const dispatch = useDispatch()
    const onSubmit = data => {
        dispatch({type:'SEND_FORM',payload:data})
        dispatch({type:"ADD_STEP"})
    };
    return (
    <div className="accordion">
        <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeInUp">
            <Accordion 
                style={{margin:0}}
            >
                <AccordionSummary
                    expandIcon={<Down/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        padding:"0px",
                        "padding-top":"41px",
                        "padding-left": "105px",
                        "padding-right":"105px",
                        "padding-bottom":"50px",
                        margin:"0px",
                        "@media(max-width:1170px)":{
                            "padding-left": "47px",
                            "padding-right":"47px",
                        },
                        "@media(max-width:768px)":{
                            "padding-left": "100px",
                            "padding-right":"100px",
                        },
                        "@media(max-width:670px)":{
                            "padding-left": "14px",
                            "padding-right":"14px",
                        }
                    }}
                >
                <Typography
                    sx={{
                        "font-size": "19px",
                        color: "#1D1C1C",
                        "letter-spacing": "0.02em",
                        "line-height": "24px",
                        "font-weight": "600",
                        "font-family": "Raleway , sans-serif",
                        margin:0
                    }}
                >Assets</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <div className="accordion__form">
                    <label className="form__label animate__animated animate__fadeInUp">
                    <div className="form__label__title">          
                        <span className="form__label__text">Cash in banks</span>
                    </div>
                </label>
                <div className="form__input animate__animated animate__fadeInUp">
                <TextField                  
                    type="text"
                    variant="standard"
                    className={classes.text}
                    InputProps={{className: classes.input}}
                    autoComplete='off'
                    {...register("cashBanks", {required: true})}
                    error={!!errors.cashBanks}
                    >
                </TextField>
                {errors.cashBanks && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
                
                <label className="form__label animate__animated animate__fadeInUp">
                    <span className="form__label__text">Money Market Funds</span>
                </label>
                <div className="form__input">
                <TextField                
                        type="text"
                        variant="standard"
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        autoComplete='off'   
                        {...register("moneyMarket", {required: true})}
                        error={!!errors.moneyMarket}
                        >
                </TextField>
                {errors.moneyMarket && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
               
                <label className="form__label animate__animated animate__fadeInUp">
                    <span className="form__label__text">Contract Deposit</span>
                </label>
                <div className="form__input animate__animated animate__fadeInUp">
                <TextField                
                        type="text"
                        variant="standard"
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        autoComplete='off'  
                        {...register("contract", {required: true})}
                        error={!!errors.contract}
                        >
                </TextField>
                {errors.contract && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
                
                    </div>   
                </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion
                style={{margin:0}}
            >
            <AccordionSummary
                expandIcon={<Down/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    color: "#1D1C1C",
                    padding:"0px",
                    "padding-top":"41px",
                    "padding-left": "105px",
                    "padding-right":"105px",
                    "padding-bottom":"50px",
                    "@media(max-width:1170px)":{
                        "padding-left": "47px",
                        "padding-right":"47px",
                    },
                    "@media(max-width:768px)":{
                        "padding-left": "100px",
                        "padding-right":"100px",
                    },
                    "@media(max-width:670px)":{
                        "padding-left": "14px",
                        "padding-right":"14px",
                    }
                }}
            >
            <Typography
                 sx={{
                    "font-size": "19px",
                    color: "#1D1C1C",
                    "letter-spacing": "0.02em",
                    "line-height": "24px",
                    "font-weight": "600",
                    "font-family": "Raleway , sans-serif"
                }}
            >Liabilities</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    'padding-bottom':'40px'
                }}
            >
            <Typography>   
                <div className="accordion__form">
                <div className="notes_payable animate__animated animate__fadeInUp">Notes Payable</div>
                <label className="form__labelanimate__animated animate__fadeInUp ">
                    <div className="form__label__title">          
                        <span className="form__label__text">Bank Loans</span>
                    </div>
                </label>
                <div className="form__input animate__animated animate__fadeInUp">
                <TextField                  
                    type="text"
                    variant="standard"
                    autoComplete='off'
                    className={classes.text}
                    InputProps={{className: classes.input}}
                    {...register("bankLoans", {required: true})}
                    error={!!errors.bankLoans}
                    >
                </TextField>
                {errors.bankLoans && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
                <label className="form__label animate__animated animate__fadeInUp">
                    <span className="form__label__text">Others Loans (student debt)</span>
                </label>
                <div className="form__input animate__animated animate__fadeInUp">
                <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("othersLoans", {required: true})}
                        error={!!errors.othersLoans}
                        >
                </TextField>
                {errors.othersLoans && <p className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>   
                <label className="form__label animate__animated animate__fadeInUp">
                    <span className="form__label__text">Outstanding Credit Card Debts</span>
                </label>
                <div className="form__input animate__animated animate__fadeInUp">
                <TextField                
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("credit", {required: true})}
                        error={!!errors.credit}
                        >
                </TextField>
                {errors.credit && <p  className="errors animate__animated animate__fadeInUp">This field is obligatory</p>} 
                </div>
                
                <div className="form__buttons">  
                    <BackButton step={4}/>           
                    <NextButton onclick={() => onSubmit()}></NextButton>
                </div>
                </div>
            </Typography>
            </AccordionDetails>
            </Accordion>  
        </form>
    </div>
    )
}
export default fourStep;