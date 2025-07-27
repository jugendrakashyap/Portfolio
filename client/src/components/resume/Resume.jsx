import React from 'react'
import './resume.css'

function Resume() {
    return (
        <div id='Resume'>
            <h1>Skills</h1>
            <div className='skills'>
                <p className='skill'>HTML</p>
                <p className='skill'>CSS</p>
                <p className='skill'>JavaScript</p>
                <p className='skill'>React</p>
                <p className='skill'>Node.js</p>
                <p className='skill'>Express.js</p>
                <p className='skill'>MongoDB</p>
                <p className='skill'>Git</p>
                <p className='skill'>Github</p>
            </div>
            <div className='edu_boxes'>
                <div className='edu_box1'>
                    <div className='line'>
                        <div className='edu_label'></div>
                        <div className='edu_bullet pro_bullet1'></div>
                        <div className='edu_bullet pro_bullet2'></div>
                    </div>
                </div>
                <div className='edu_box2'>
                    <h1>Projects</h1>
                    <div className='title'>
                        <a href=''>DigiLibrary - A digital library for ebooks</a>
                        <p>Dec 2024 - April 2028</p>
                    </div>
                    <ul className='points'>
                        <li><span>Smart, User-Friendly Interface:</span> Clean design with advanced search
                            and filters to easily find eBooks by title, author, subject, or keywords.
                        </li>
                        <li><span>Diverse eBook Categories:</span> Explore a wide range of categories
                            including fiction, non-fiction, academic, self-help, and more.
                        </li>
                    </ul>
                    <div className='title'>
                        <a href=''>Responsive Spotify Clone</a>
                        <p>Dec 2024 - Present</p>
                    </div>
                    <ul className='points'>
                        <li><span>Responsive:</span> Developed a fully responsive Spotify clone, ensuring
                            seamless user experience across devices.
                        </li>
                        <li><span>Key features:</span> Implementing key features like music playback, playlist
                            management, and user authentication with a seamless, cross-device
                            UI/UX.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='edu_boxes'>
                <div className='edu_box1'>
                    <div className='line'>
                        <div className='edu_label'></div>
                        <div className='edu_bullet edu_bullet1'></div>
                        <div className='edu_bullet edu_bullet2'></div>
                    </div>
                </div>
                <div className='edu_box2'>
                    <h1>Education</h1>
                    <div className='title'>
                        <p><span>Rai University Ahmedabad</span></p>
                        <p>2024-2028</p>
                    </div>
                    <p>B.Tech CSE</p>
                    <p>CGPA : 8.7</p>
                    <div className='title'>
                        <p><span>MGHM Inter College Marehra Etah</span></p>
                        <p>2023</p>
                    </div>
                    <p>12th</p>
                    <p>Score : 81%</p>
                </div>
            </div>
        </div>
    )
}

export default Resume