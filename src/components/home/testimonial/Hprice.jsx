import React from 'react'
import PriceCard from '../../pricing/PriceCard'
import Title from '../../common/title/Title'

function Hprice() {
  return (
    <>
    <section className="hprice padding">
          <Title subtitle="our pricing" title = "pricing & packages"/>
           <div className="price container grid">
               <PriceCard/>
            </div>
    </section>
    </>
  )
}

export default Hprice