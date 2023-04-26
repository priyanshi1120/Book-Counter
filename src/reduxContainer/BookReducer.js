import { buy_book ,less_book } from './BookTypes'
const initialState = {

    NumberofBooks: 20
}
const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_book: 
            const newNumber = state.NumberofBooks+1;
            return {

                NumberofBooks: newNumber
            }
            case less_book: 
            const newNNumber = state.NumberofBooks-1;
            return {

                NumberofBooks: newNNumber
            }
        //    return { NumberofBooks:newNumber }
        
        default: return state
    }
}
export default BookReducer;