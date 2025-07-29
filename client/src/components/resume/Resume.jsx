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
                        <div className="lavel-inner" style={{width: "90%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>CSS</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "90%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>JavaScript</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "90%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>React</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "90%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Node.js</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "90%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Express.js</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "80%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>MongoDB</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "70%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Git</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "70%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Github</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "60%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>React Native</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "50%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Next.js</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "35%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <p>Java</p>
                    <div className="lavel-outer">
                        <div className="lavel-inner" style={{width: "30%"}}></div>
                    </div>
                </div>
            </div>
            <div className='edu_boxes main_bullet'>
                <div className='bullet_box'>
                    <div className='line'>
                        <div className='edu_label'>
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/512/9282/9282649.png" alt="" />
                        </div>
                    </div>
                    <h1>Projects</h1>
                </div>
                <div className='bullet_box'>
                    <div className='line'>
                        <div className='edu_bullet'></div>
                    </div>
                    <div className='project_title'>
                        <a href=''>DigiLibrary - A digital library for ebooks</a>
                        <p>Dec 2024 - April 2028</p>
                    </div>
                </div>
                <div className='bullet_box'>
                    <div className='line'></div>
                    <ul className='points'>
                        <li><span>Smart, User-Friendly Interface:</span> Clean design with advanced search
                            and filters to easily find eBooks by title, author, subject, or keywords.
                        </li>
                        <li><span>Diverse eBook Categories:</span> Explore a wide range of categories
                            including fiction, non-fiction, academic, self-help, and more.
                        </li>
                    </ul>
                </div>
                <div className='bullet_box'>
                    <div className='line'>
                        <div className='edu_bullet'></div>
                    </div>
                    <div className='project_title'>
                        <a href=''>Responsive Spotify Clone</a>
                        <p>Dec 2024 - Present</p>
                    </div>
                </div>
                <div className='bullet_box'>
                    <div className='line'></div>
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
            <div className='bullet_box main_bullet'>
                <div className='line'>
                    <div className='edu_label'>
                        <img className='icon' src="https://cdn-icons-png.flaticon.com/512/9282/9282649.png" alt="" />
                    </div>
                </div>
                <h1>Education</h1>
            </div>
            <div className='bullet_box'>
                <div className='line'>
                    <div className='edu_bullet'></div>
                </div>
                <div className='project_title'>
                    <p><span>Rai University Ahmedabad</span></p>
                    <p>2024-2028</p>
                </div>
            </div>
            <div className='bullet_box'>
                <div className='line'></div>
                <div className="points">
                    <p>B.Tech CSE</p>
                    <p>CGPA : 8.7</p>
                </div>
            </div>
            <div className='bullet_box'>
                <div className='line'>
                    <div className='edu_bullet'></div>
                </div>
                <div className='project_title'>
                    <p><span>MGHM Inter College Marehra Etah</span></p>
                    <p>2023</p>
                </div>
            </div>
            <div className='bullet_box'>
                <div className='line'></div>
                <div className="points">
                    <p>12th</p>
                    <p>Score : 81%</p>
                </div>
            </div>
        </div >
    )
}

export default Resume