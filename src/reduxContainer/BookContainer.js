import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function BookContainer() {
  function AssignNoBooks(state){
    return state.NumberofBooks;
  }
  function handleClick(){
   dispatch({
    type:"buy_book"
   })
  }
   function handleNClick(){
   dispatch({
    type:"less_book"
   })
  }
  
  const noofBooks =  useSelector(AssignNoBooks);
const dispatch = useDispatch();


  return (
    <>
      <h1> books = {noofBooks}</h1>
      <button onClick={handleClick} > +</button>
      <button onClick={handleNClick} > -</button>
    </>
  )
}

export default BookContainer
