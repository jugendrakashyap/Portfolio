import React from 'react'

import './profile.css'

function Profile() {
    return (
        <section className='profile'>
            <div className='profile_box'>
                <img className='photo' src="src/assets/Photo.jpg" alt="" />
                <h2>Jugendra Kashyap</h2>
                <p className='profession'>FullStack Developer</p>
            </div>
            <div className='details_box'>
                <div className='detail_box'>
                    <div className='icon'>
                        <img id='email_img' src="src/assets/email.png" alt="" />
                    </div>
                    <div>
                        <p className='label'>EMAIL</p>
                        <p>kjugendra63@gmail.com</p>
                    </div>
                </div>
                <div className='detail_box'>
                    <div className='icon'></div>
                    <div>
                        <p className='label'>MOBILE</p>
                        <p>+91 7217205976</p>
                    </div>
                </div>
                <div className='detail_box'>
                    <div className='icon'></div>
                    <div>
                        <p className='label'>BIRTHDAY</p>
                        <p>15/07/2006</p>
                    </div>
                </div>
                <div className='detail_box'>
                    <div className='icon'></div>
                    <div>
                        <p className='label'>LOCATION</p>
                        <p>Ahmedabad, Gujrat</p>
                    </div>
                </div>
                <div className='social_box'>
                    <img className='social_links' src="#" alt="" />
                    <img className='social_links' src="#" alt="" />
                    <img className='social_links' src="#" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Profile