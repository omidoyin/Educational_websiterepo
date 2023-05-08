import React from 'react'
import Back from '../common/back/Back'
import './contact.css'

function Contact() {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d179369.91858207085!2d3.416157595908474!3d6.577995997676897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1683542569499!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title='Contact Us'/>
      <section className="contact padding">
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map} ></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p>fsfgj kjkbsfj ffhlf jbhhkm 'dfgmndvdv vdvkn</p>
                <div className="items grid2">
                    <div className="box">
                        <h4>ADDRESS: </h4>
                        <p>23 highways streest, suite 21 NY</p>
                    </div>
                    <div className="box">
                        <h4>Email: </h4>
                        <p>aaa@gmail.com</p>
                    </div>
                    <div className="box">
                        <h4>Phone: </h4>
                        <p>+123 456 789</p>
                    </div>
                </div>
                <form action="">
                    <div className="flexSB">
                        <input type='text' placeholder='Name'/>
                        <input type='email' placeholder='Email'/>
                    </div>
                    <input type='email' placeholder='Subject'/>
                    <textarea cols={30} rows={10}>
                        create a message here....
                    </textarea>
                    <button className="primary-btn"> SEND MESSAGE</button>
                </form>
                <h3> Follow us here</h3>
                <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
            </div>
        </div>
      </section>

    </>
  )
}

export default Contact