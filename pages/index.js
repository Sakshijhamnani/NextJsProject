import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'

const DUMMY_MEETUPS=[
    {
        id:'m1',
        title:'A first Meetup',
        image:'https://picsum.photos/seed/picsum/2000/400',
        address:'Some address 5 , some city',
        description:'This is a first meetup'


    },
    {
        id:'m2',
        title:'A second Meetup',
        image:'https://picsum.photos/seed/picsum/2000/300',
        address:'Some address 5 , some city',
        description:'This is a second meetup'


    }
]

const HomePage = () => {
  return (
    // <Layout>
   <MeetupList meetups={DUMMY_MEETUPS}/>
//    </Layout>
  )
}

export default HomePage