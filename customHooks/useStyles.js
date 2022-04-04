import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    text:{  
         width:"100%",
         margin:"0px 0px 40px 0px",
    },
    input:{ 
         padding:"10px 30px 8px 30px",
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
            opacity: 0.4
        },
        "&.Mui-focused":{
            color:"#000"
        }, 
        "& .MuiInputBase-input":{
            padding:'0px'
        }
    },
    send:{
        padding:"2px 35px 15px 30px",
        color:'white',
        "font-size": "15px",
        "font-weight": "600",
        "font-family": 'Raleway , sans-serif',
        "&::after": {
            "border-bottom": "2px solid #000",               
        },
        "&::before": {
            "border-bottom": "2px solid #FFFFFF", 
            
        },
    },
    checkbox:{

    }
 }));   
export default useStyles;