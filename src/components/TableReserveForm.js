import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export const TableReserveForm = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guest, setGuest] = useState('1')
  const [location, setLocation] = useState('indoor')
  const [event, setEvent] = useState('casual')

  const[times,setTimes]=useState(props.availableTimes.availableTimes)

function handleChange(e){
setDate(e.target.value)
props.dispatch(e)
}

  function handleSubmit(e) {
    e.preventDefault();
   if((firstName==='' || lastName==='' || contactNo==='') &&
   (date==='' || time==='' || guest==='' || event==='')
   ) {
      alert('Please fill out all the required fields before submitting')}
      else{
       alert('Thank you for reserving a table! You will shortly receive a confirmation message on your provided phone no.')
      }
      props.SubmitForm(e)
  }
useEffect(() => {
  console.log(times)})



  return (
    <>
      <Header />
      <form className='table-form' onSubmit={handleSubmit}>
        <h1 className='display-title'>Table Reservation Form</h1>
        <p className='paragraph'>Instructions: Please fill out all the fields with correct information.</p>
        <h2 className='subtitle'>Customer Details:</h2>
        <div className='personal-details'>
          <div>
            <label htmlFor='firstname' className='card-title'>First Name * </label>
            <input type='text' required min={3} name='firstname'
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder='first name' />
            </div>
          <div>
            <label htmlFor='lastname' className='card-title'>Last Name *</label>
            <input type='text' min={3} name='lastname'
            onChange={(e)=>setLastName(e.target.value)}
            placeholder='last name' /></div>
          <div>
            <label htmlFor='contactno' className='card-title'>Contact No *</label>
            <input type='tel' required name='contactno'
            onChange={(e)=>setContactNo(e.target.value)}
            placeholder='your phone number' /></div>
          <div>
            <label htmlFor='email' className='card-title'>Email:</label>
            <input type='email' name='email'
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='your email' /></div>
        </div>
          <h2 className='subtitle'>Booking Details:</h2>
          <div className='personal-details'>
            <div>
              <label htmlFor="res-date" className='card-title'>Choose date*</label>
              <input type="date" id="res-date"
              onChange={handleChange}
              /></div>
            <div>
              <label htmlFor="res-time" className='card-title'>Choose time *</label>
              <select id="res-time " className='select'
              onChange={(e)=>setTime(e.target.value)}
              >
                {
                  props.availableTimes.availableTimes.map(availableTime =>{
                    return <option>{availableTime}</option>
                  })
                }
              </select>
            </div>
            <div>
              <label htmlFor="guests" className='card-title'>Number of guests *</label>
              <input type="number" placeholder="1" min="1" max="10" id="guests"
              onChange={(e)=>setGuest(e.target.value)} />
            </div>
            <div id='radio'>
              <label htmlFor='location' className='card-title'>Location *</label>
              <input type='radio' name='location' value={'indoor'} defaultChecked 
              onChange={(e)=>setLocation(e.target.value)}
              />Indoor
              <input type='radio' name='location' value={'outdoor'} 
              onChange={(e)=>setLocation(e.target.value)}
              />Outdoor
            </div>
            <div>
              <label htmlFor='event' className='card-title' id='event'> Event:</label>
              <select name='event' className='select'
              onChange={(e)=>setEvent(e.target.value)}
              >
                <option>Casual</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
              </select>
            </div>
            <div className='instructions'>
              <label htmlFor='instructions' className='card-title'>Instructions:</label>
              <input type='text' placeholder='Any instructons for staff' name='instructions' />
            </div>
          </div>
          <button className='btn' type='submit'>Reserve Now</button>
        </form>
        <Footer />
      </>
      )
}
