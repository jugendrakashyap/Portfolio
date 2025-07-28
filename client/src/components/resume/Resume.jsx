import React from 'react'
import './resume.css'

function Resume() {
    return (
        <div id='Resume'>
            <h1>Skills</h1>
            <div className='skills'>
                <div className='skill'>
                    <p>HTML</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>CSS</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>JavaScript</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>React</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Node.js</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Express.js</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>MongoDB</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Git</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Github</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>React Native</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Next.js</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Java</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner"></div>
                    </div>
                </div>
            </div>
            <div className='edu_boxes'>
                <div className='edu_box1'>
                    <div className='line'>
                        <div className='edu_label'>
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/512/864/864702.png" alt="" />
                        </div>
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