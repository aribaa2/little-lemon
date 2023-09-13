import React, { useReducer } from 'react'
import { TableReserveForm } from './TableReserveForm'


const d = new Date("2022-03-25");
const initializeTimes=()=>{
  const initializeTimes= [ "17:00","18:00","19:00","20:00","21:00","22:00"]
}

const reducer=(state,action)=>{
  return initializeTimes
 }
export const Reservations = () => {

     const [state,dispatch]=useReducer(reducer,initializeTimes)

  return (
    <TableReserveForm times={state}
    />
  )
}
