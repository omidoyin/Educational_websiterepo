import React from 'react'
import { team } from '../../dummydata'
import './team.css'

function TeamCard() {
  return (
    <>
      {team.map((val)=> (<div className="item shadow">
        <div className="img">
            <img src={val.cover} alt=''/> 
            <div className="overlay">
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon' ></i>
                <i className='fab fa-twitter icon' ></i>
                <i className='fab fa-youtube icon' ></i>
                <i className='fab fa-tiktok icon' ></i>    
            </div>
            <div className="details">
                <h2>{val.name}</h2>
                <p>{val.work}</p>
            </div>
        </div>
      </div>))}
    </>
  )
}

export default TeamCard