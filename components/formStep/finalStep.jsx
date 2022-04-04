const FinalStep = () =>{
    return(
        <div className="final-step animate__animated animate__fadeInUp">
            <div className="final-step__title">
                Please see the how your preferences correspond with your income and savings:
            </div>
            <div className="final-step__text">
                DAn average 3 bedroom/ 2 bathroom apartment in XXX is listed at XXXX (the range is from YY to ZZ), with the monthing expenses of $$$.
            </div>
            <div className="final-step__text">
                Your current debt to income ratio is %%, “debt” includes all mandatory payments (insurance, monthly maintenance and property tax and other debt payment)
            </div>
            <div className="final-step__text">   
                Lenders will likely offer you a loan of $XXX with a downpayment of 20%. With the current average rate of %, your monthly mortgage payment will be $ZZZ.
            </div>
           <div className="final-step__text__bottom">
                Many coops will require a down payment of 35%. Most co-op boards would like to see your savings (after all the purchasing expenses) to cover at least 2 years of mortgage and maintenance payments. Some co-ops have additional asset requirements.
           </div>
        </div>
    )
}
export default FinalStep;