import React, { useState } from 'react'
import Title from '../common/title/Title'
import { faq } from '../../dummydata'

function Faq() {
  const [click, setClick] = useState(null)
  const toggle =(index) => {
    if (click ===index){
      return setClick(null)
    }
    setClick(index)
  }
  return (
    <> 
        <Title subtitle='FAQS' title='Frequently Asked Questioned'/>
        <section className="faq">
            <div className="container">
                {
                    faq.map((val,index)=>(
                        <div className="box">
                          <button className='accordion' onClick={()=>{toggle(index)}} key={index}>
                            <h2>{val.title}</h2>
                            <span>{click ===index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                          </button>
                          <h2> the click is {click} and {typeof(click)} the index is {index}</h2>
                          {
                            click ===index ? (<div className="text">
                            <p>{val.desc}</p>
                          </div>) : null
                          }
                          
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Faq