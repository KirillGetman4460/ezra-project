import { useSelector } from "react-redux";
const Pagination = () =>{
    const step = useSelector(state => state.step)
    return (
        <div className='pagination'>
            <ul className="pagination__list">
                <li className={`pagination__link ${step == 1 ? "active" : step === 2 ? "active" : step === 3 ? "active" : step === 4 ? "active next":step === 5 ? "active next":step === 6 ? "active next":step === 7 ? "active next":step === 8 ? "active next":step === 9 ? "active next":""}`}>
                    01
                </li>
                <li className={`pagination__link ${ step === 4 ? "active":step === 5 ? "active next":step === 6 ? "active next":step === 7 ? "active next":step === 8 ? "active next":step === 9 ? "active next":""}`}>
                    02
                </li>
                <li className={`pagination__link ${step === 5 ? "active":step === 6 ? "active next":step === 7 ? "active next":step === 8 ? "active next":step === 9 ? "active next":""}`}>
                    03
                </li>
                <li className={`pagination__link ${step === 7 ? "active":step === 8 ? "active":step === 9 ? "active next":""}`}>
                    04
                </li>
            </ul>
        </div>
    )
}
export default Pagination;