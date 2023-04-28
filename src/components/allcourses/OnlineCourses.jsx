import React from 'react'
import Title from '../common/title/Title'
import { online } from '../../dummydata'

function OnlineCourses() {
  return (
    <div>
        <section className="online">
            <div className="container">
                <Title subtitle='COURSES' title ='Browse Our Online Courses'/>

                <div className="content grid3">
                    {online.map((val) => (
                        <div className="box">
                            <div className="img">
                                <img src={val.cover} alt=''/>
                                <img src={val.hoverCover} alt='' className='show'/>
                            </div>
                            <h1>{val.courseName}</h1>
                            <span>{val.course}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </div>
  )
}

export default OnlineCourses