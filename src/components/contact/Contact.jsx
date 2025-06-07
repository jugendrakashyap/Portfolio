import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div id='Contact'>
            <form className='contact_form' action="">
                <input type="text" placeholder='Full name' />
                <input type="email" name="" id="" placeholder='Email' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
                <button className='send_btn'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact