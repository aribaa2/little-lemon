import React,{useReducer} from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { Booking } from './Booking'
import {ConfirmedBooking} from './ConfirmedBooking'

export const Main = () => {
     const seedRandom=function (seed){
       var m=2**35 - 31;
       var a=185852;
       var s=seed % m;
       return function(){
        return (s = s * a % m) / m;
       }
     }

     const fetchAPI=function(date){
        let result=[];
        let random=seedRandom(date)
        for (let i = 17; i <=23; i++){
        if(random()< 0.5){
            result.push(i+":00")
        }
       if(random()> 0.5){
         result.push(i+":30")
       } 
        }
        console.log(result)
        return result;
     }

    const submitAPI=function(formData){
        return true
    }

    const initialState={availableTimes:fetchAPI(new Date())}
    const [state,dispatch]=useReducer(updateTimes,initialState)
    function updateTimes(state,date){
        return {availableTimes:fetchAPI(new Date())}
    }
const navigate=useNavigate();
function submitForm(formData){
    if(submitAPI(formData)){
     navigate("/confirmed")
    }
}

  return (
   
    <Routes>
        
        <Route path='/' element={<Booking availableTimes={state} dispatch={dispatch}
        submitForm={submitForm}
        />}/>
         <Route path='/confirmed' element={<ConfirmedBooking/>}/>
    </Routes>
  )
}
