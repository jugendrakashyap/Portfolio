import React from 'react'

import './profile.css'

function Profile() {
    return (
        <section className='profile'>
            <div className='profile_box'>
                <img className='photo' src="src/assets/Photo.jpg" alt="" />
                <h2>Jugendra Kashyap</h2>
                <p className='profession'>FullStack & Mobile Developer</p>
            </div>
            <div className='details_box'>
                <div className='detail_box'>
                    <div className='icon'>
                        <img className="icon_img" src="https://cdn-icons-png.flaticon.com/512/4338/4338894.png" alt="" />
                    </div>
                    <div>
                        <p className='label'>EMAIL</p>
                        <p>kjugendra63@gmail.com</p>
                    </div>
                </div>
                <div className='detail_box'>
                    <div className='icon'>
                        <img className="icon_img" src="https://cdn-icons-png.flaticon.com/512/159/159832.png " alt="" />
                    </div>
                    <div>
                        <p className='label'>MOBILE & WHATSAPP</p>
                        <p>+91 7217205976</p>
                    </div>
                </div>
                <div className='detail_box'>
                    <div className='icon'>
                        <img className='icon_img' src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt='' />
                    </div>
                    <div>
                        <p className='label'>BIRTHDAY</p>
                        <p>15/07/2006</p>
                    </div>
                </div>
                <div className='detail_box'>
                    <div className='icon'>
                        <img className='icon_img' src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" alt='' />
                    </div>
                    <div>
                        <p className='label'>LOCATION</p>
                        <p>Ahmedabad, Gujrat</p>
                    </div>
                </div>
                <div className='social_box'>
                    <a href="https://www.linkedin.com/in/jugendrakashyap">
                        <img className='social_links' src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" />
                    </a>
                    <a href="https://github.com/jugendrakashyap">
                        <img className='social_links' src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="" />
                    </a>
                    <a href="#">
                        <img className='social_links' src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Profile