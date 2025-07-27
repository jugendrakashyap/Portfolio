import React from 'react'
import './about.css'

function About() {
  return (
    <div id='About'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit voluptas natus, perspiciatis rerum repellendus porro eaque voluptatibus blanditiis! Earum veritatis in consectetur repellendus exercitationem cum rerum tempora ratione sapiente? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nisi vitae est optio aperiam nemo eius provident dolores quo, consequatur at modi iste reiciendis sint alias? Accusamus ex ad odio!</p>
      <h1 className='title'>What I'm Doing</h1>
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