import React, { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetUpDetails = () => {

  return (
    
    <MeetupDetail image="https://picsum.photos/seed/picsum/2000/400"
    title="A First Meetup"
    address="Some street 5,Some city"
    description="The meetup description" />
   
    
  )
}

export async function getStaticPaths(){
  return{
    fallback:false,
    paths:[
      {params:{
        meetupId:'m1'
      }},
      {params:{
        meetupId:'m2'
      }},
      {params:{
        meetupId:'m3'
      }}
    ]
  }
}

export async function getStaticProps(context){
  //fetch data for a single meetup

  const meetupId=context.params.meetupId;
  console.log(meetupId)
    return {
      props:{
         meetupData:{
          image:"https://picsum.photos/seed/picsum/2000/400",
          id:meetupId,
          title:"A First Meetup",
          address:"Some street 5,Some city",
          description:"The meetup description"

         }
      }
    }
}

export default MeetUpDetails