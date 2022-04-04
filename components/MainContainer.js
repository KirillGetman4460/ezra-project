import Footer from "./footer"
import Pagination from "./pagination"
import ProgressBar from "./progressBar"
import Title from "..//icons/title.svg"
import Form from "./form"
import { useDispatch } from "react-redux"
const MainContainer = () =>{
    const dispatch = useDispatch()
    return (
        <div className="main">
            <div className="wrapper">
                <div className="conteiner">
                    <h1 className="ezra__title"><Title onClick={() => dispatch({type: 'ZEROING_STEP',payload:1})}></Title></h1>
                    <ProgressBar></ProgressBar>
                    <Form></Form> 
                    <Pagination></Pagination>                             
                </div>
                <Footer></Footer> 
            </div>
            
        </div>
      
    )
}
export default MainContainer;