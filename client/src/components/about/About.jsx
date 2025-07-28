import React from 'react'
import './about.css'

function About() {
  return (
    <div id='About'>
      <p>
        I'm a B.Tech Computer Science and Engineering student with a strong passion for technology and innovation. I specialize in full stack web development and mobile app development, with hands-on experience in building responsive, user-friendly applications using modern frameworks like React, Node.js, and React Native.
        <br></br>
        <br></br>
        I enjoy solving real-world problems through code and continuously strive to learn new tools and technologies. Whether it's a web platform or a mobile app, I'm driven to create efficient, scalable, and impactful digital solutions.
      </p>
      <h1 className='title'>What I'm Doing</h1>
      <div className='boxes'>
        <div className='box'>
          <div className='icon_box'>
            <img className='card_icon' src="https://cdn-icons-png.flaticon.com/512/2010/2010990.png" alt="" />
          </div>
          <div>
            <h1>Web Development</h1>
            <p>High-quality development of sites at the professional level.</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon_box'>
            <img className='card_icon' src="https://cdn-icons-png.flaticon.com/512/7075/7075373.png" alt="" />
          </div>
          <div>
            <h1>Mobile Apps</h1>
            <p>Professional development of applications for iOS and Android.</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon_box'>
            <img className='card_icon' src="https://cdn-icons-png.flaticon.com/512/17732/17732106.png" alt="" />
          </div>
          <div>
            <h1>Database Management</h1>
            <p>Efficient organization, storage, and security of data using reliable and scalable database systems.</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon_box'>
            <img className='card_icon' src="https://cdn-icons-png.flaticon.com/512/2010/2010990.png" alt="" />
          </div>
          <div>
            <h1>Web Design</h1>
            <p>The most modern and high-quality design made at a professional level.</p>
          </div>
        </div>
      </div>
      <h1 className='title'>Other</h1>
      <div className='boxes'>
        <div className='box'>
          <div className='icon_box'>
            <img className='card_icon' src="https://cdn-icons-png.flaticon.com/512/2010/2010990.png" alt="" />
          </div>
          <div>
            <h1>Web Design</h1>
            <p>The most modern and high-quality design made at a professional level.</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon_box'>
            <img className='card_icon' src="https://cdn-icons-png.flaticon.com/512/2010/2010990.png" alt="" />
          </div>
          <div>
            <h1>Web Development</h1>
            <p>High-quality development of sites at the professional level.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About