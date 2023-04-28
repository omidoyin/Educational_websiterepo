import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'

function Hero() {
  return (
    <div>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
                    <p>hyfgsdjfnsdjfvhjksd dfsadfvbkjbsadfv adxvcadghvsa sacjhhvhjsa saxcvshdf sbscysah sfcvhjAQFN</p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button >
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin"></div>
    </div>
  )
}

export default Hero