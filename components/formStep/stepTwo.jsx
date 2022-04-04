import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { TextField,Checkbox } from '@mui/material';
import NextButton from "./nextButton.jsx"
import BackButton from "./backButton.jsx"
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from "react-redux";
import Box from "../../icons/box.svg"
import Check from "../../icons/checkbox.svg"
import useStyles from "../../customHooks/useStyles"
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@mui/styles';
const styleAutoComplete = makeStyles(()=>({
    root: {
        padding:'0px'
    }
}))
const stepTwo = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const classes = useStyles()
    const classesAutoComplete = styleAutoComplete()
    const dispatch = useDispatch()
    const[active,setActive] = useState(false)
    const onSubmit = data => {
        dispatch({type:'SEND_FORM',payload:data})
        dispatch({type:"ADD_STEP"})
    };
    
    const street = [
        {label: 'Broadway'},
        {label: "Park Avenue"},
        {label:"St. Mark’s Place"},
        {label:'5th Avenue'},
        {label:'Washington Street'},
        {label:'Wall Street'},
        {label:'Crosby Street'},
        {label:'Doyers Street'},
        {label:'Queens'},
        {label:'Dyre / Dyer Avenue'},
        {label:'Fulton Street '},
        {label:'Brooklyn'}
    ];
    /*
        <Autocomplete
                        freeSolo
                        open={open}
                        onOpen={() => {
                            if (inputValue) {
                                setOpen(true);
                            }
                        }}
                        onClose={() => setOpen(false)}
                        inputValue={inputValue}
                        onInputChange={(e, value, reason) => {
                            setInputValue(value);
                            if (!value) {
                                setOpen(false);
                            }
                        }}
                        options={streed}
                        getOptionLabel={(option) => option.label}
                        {...register("place", {required: true})}
                        InputProps={{className: classes.input}}
                        renderInput={(params) => (
                            <TextField   
                            
                                {...params} 
                               
                                InputProps={{className: classes.input}}
                                type="text"
                                variant="standard"
                                {...register("place", {required: true})}
                                >
                            </TextField> 
                        )}
                    />
    */
    return (
            <form onSubmit={handleSubmit(onSubmit)} className="form animated animatedFadeInUp fadeInUp animated__form">
                <div className="form__title">
                    Do you know where would you like to be? Start typing the neighborhood, street, borough
                </div>
                <label className={`form__label ${active ? 'active' : ''}`}>
                    <div className="form__label__title">          
                        <span className={`form__label__text`}>Start typing the neighborhood, street, borough</span>
                    </div>
                </label>
                <div className="form__input">       
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={street}
                    sx={{ 
                        width: "100%",
                    }}    
                    classes={classesAutoComplete}
                    {...register("place", {required: true})}
                    error={!!errors.place}

                    renderInput={(params) => <TextField        
                        {...params} 
                        type="text"
                        variant="standard"
                        className={classes.text}
                        {...register("place", {required: true})}

                        onClick={() => setActive(true)}
                        onBlur={() => setActive(false)}
                        sx={{
                            ".MuiInput-root":{
                                padding:"2px 35px 8px 30px",
                                "font-size": "15px",
                                "font-weight": "600",
                                "font-family": 'Raleway , sans-serif',
                                "&::after": {
                                    "border-bottom": "2px solid #D3981C",               
                                },
                                "&::before": {
                                    "border-bottom": "2px solid #1D1C1C", 
                                    opacity: 0.25,
                                },
                                "&.Mui-error::before": {
                                    background:"#970002",
                                    height:"1px",             
                                },
                                "&.Mui-focused":{
                                    color:"#000"
                                } 
                            }
                        }}

                    />}
                />
                {errors?.place?.type === "required" && <span className="errors animate__animated animate__fadeInUp">This field is obligatory</span>} 
                </div>
                <div className="form__title">
                    How many bedrooms/ bathrooms?                         
                </div>
                <label className="form__label">
                    <span className="form__label__text">For example, 3/2</span>
                </label>
                <div className="form__input">
                    <TextField     
                        autocomplete="on"            
                        type="text"
                        variant="standard"
                        autoComplete='off'
                        className={classes.text}
                        InputProps={{className: classes.input}}
                        {...register("numberRooms", {required: true})}
                        error={!!errors.numberRooms}
                        >
                    </TextField>   
                    {errors.numberRooms && <p className="errors">This field is obligatory</p>} 
                </div>
                <div className="type">
                    <div className="type__title">
                        Do you know what type of property are you looking for?
                    </div>
                    <ul className="type__list">
                        <li className="type__list__link">
                            <FormControlLabel control={<Checkbox 
                                icon={<Box></Box>} 
                                checkedIcon={<Check />} 
                                value="Coop" 
                                {...register("checkbox")}/>} 
                                label="Сoop"
                                sx={{   
                                    "& .MuiTypography-root":{
                                        "padding-left":'4px'
                                    }
                                    
                                }}
                            ></FormControlLabel>           
                        </li>
                        <li className="type__list__link">
                            <FormControlLabel 
                                control={<Checkbox icon={<Box></Box>} 
                                checkedIcon={<Check />} value="Townhouse" 
                                {...register("checkbox")}/>} 
                                label="Townhouse"
                                sx={{   
                                    margin:'0px', 
                                    "& .MuiTypography-root":{
                                        "padding-left":'4px'
                                    }   
                                }}
                                ></FormControlLabel> 
                        </li>
                        <li className="type__list__link">
                            <FormControlLabel 
                            control={<Checkbox 
                            icon={<Box></Box>} 
                            checkedIcon={<Check />} 
                            value="Condo" 
                            {...register("checkbox")}/>} 
                            label="Condo"
                            sx={{   
                                
                                "& .MuiTypography-root":{
                                    "padding-left":'4px'
                                }   
                            }}
                            ></FormControlLabel> 
                        </li>
                        <li className="type__list__link">
                        <FormControlLabel 
                        control={<Checkbox 
                        icon={<Box></Box>} 
                        checkedIcon={<Check />} 
                        value="Multifamily" 
                        {...register("checkbox")}/>} 
                        label="Multifamily"
                        sx={{  
                            margin:'0px', 
                            "& .MuiTypography-root":{
                                "padding-left":'4px'
                            }   
                        }}
                        ></FormControlLabel> 
                        </li>
                    </ul>
                </div>
                <div className="form__buttons">  
                    <BackButton step={1}/>           
                    <NextButton onclick={() => onSubmit()}></NextButton>
                    
                </div>
                
            </form>
        

    )
}
export default stepTwo;