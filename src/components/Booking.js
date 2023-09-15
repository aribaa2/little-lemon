import React from 'react'
import { TableReserveForm } from './TableReserveForm'
export const Booking = (props) => {
  return (
    <TableReserveForm availableTimes={props.availableTimes} 
    dispatch={props.dispatch} SubmitForm={props.submitForm}
    />
  )
}
