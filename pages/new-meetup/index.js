import React, { Fragment } from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
import Head from 'next/head'

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
    <Fragment>
       <Head>
        <title>Add a New Meetup</title>
        <meta name='description' 
        content='Add your own meetups and create amazing networking opportunities'
        />
      </Head>
    <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
    </Fragment>
  )
}

export default NewMeetUpPage