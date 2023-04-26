import { buy_book,less_book } from "./BookTypes";

const purchase_book=()=>{
    return{
        type : buy_book
    }
}
const no_book=()=>{
    return{
        type:less_book
    }
}
export default purchase_book;