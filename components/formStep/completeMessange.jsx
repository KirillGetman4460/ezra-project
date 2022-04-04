import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
const CompleteMessange = () =>{
    const form = useSelector(state => state.form)
    const [money,setMoney] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        form.map(el => setMoney([Number(el.bonus),Number(el.rental),Number(el.base)]))    
    },[])

    const sum = () =>{
        return money.reduce((previousValue, currentValue) => previousValue + currentValue,0)
    }

    sum() > 5000 ? setTimeout(() => dispatch({type:"ADD_STEP"}),2000) : ""
    return(
        <div className="complete__messange">        
            <div className={`complete__messange__text`}>
                 {sum() > 5000 ? 'Congratulations! Let us know more…':'We are sorry…..'}
            </div>
        </div>
    )
}
export default CompleteMessange;