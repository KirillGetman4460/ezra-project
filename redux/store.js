import { createStore } from 'redux'

const defaultState = { step:1,form:[] }

const reducer = (state = defaultState , action) =>{
    switch(action.type){
        case 'ADD_STEP':
            return{...state, step: state.step += 1}// переключение на следующую форму 
        case 'ZEROING_STEP':
            return{...state, step: state.step = action.payload}
        case 'SEND_FORM':
            return {...state, form: [...state.form, {...action.payload}]}
        default:
            return state
    }
}

const store = createStore(reducer);
export default store;