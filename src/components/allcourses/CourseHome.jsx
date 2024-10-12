import React from 'react'
import Back from '../common/back/Back'
import CourseCard from './CourseCard'
import OnlineCourses from './OnlineCourses'

const CourseHome = () => {
  return (
    <>
        <Back title='Explore Courses'/>
        <CourseCard/>
        <OnlineCourses/>
    </>
  )
}

export default CourseHome
