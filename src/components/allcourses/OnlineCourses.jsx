import React from 'react'
import Heading from '../common/heading/Heading'
import { online } from '../../dummydata'

const OnlineCourses = () => {
    return (
        <>
            <section className='online'>
                <div className="container">
                    <Heading subtitle='COURSES' title='Browse Our Online Courses' />
                    <div className="content grid3">
                         {
                            online.map((val)=>(
                                <div className="box">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                        {/* <img src={val.hoverCover} alt="hoverCover" className="show" /> */}
                                    </div>
                                    <h1>{val.courseName}</h1>
                                    <span>{val.course}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineCourses
