import {useDispatch} from 'react-redux'
const BackButton = ({step}) =>{
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch({type: 'ZEROING_STEP',payload:step})} className="back__button animate__animated animate__fadeInUp">
            <div className="back__button__text">
                Back   
            </div>        
        </div>
    )
}
export default BackButton;