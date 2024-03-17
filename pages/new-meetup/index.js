import React from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'

const NewMeetUpPage = () => {

  const router=useRouter();

   async function addMeetupHandler(enteredMeetupdata){
       const response=await fetch('/api/new-meetup',{
        method:'POST',
        body:JSON.stringify(enteredMeetupdata),
        headers:{
          'Content-Type':'application/json'
        }
       })
       try {
        const data = await response.json();
        console.log(data);

       router.push('/')
      } catch (err) {
        console.log(err.message);
      }
    }
  return (
    <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetUpPage