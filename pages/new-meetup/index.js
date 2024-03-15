

import React from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'

const NewMeetUpPage = () => {

    function addMeetupHandler(enteredMeetupdata){
        console.log(enteredMeetupdata)
    }
  return (
    <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetUpPage