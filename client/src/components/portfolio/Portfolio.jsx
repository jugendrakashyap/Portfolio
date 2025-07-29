import React, { useState, useEffect } from 'react'
import './portfolio.css'

function Portfolio() {
  const [label, setLabel] = useState('all');

  useEffect(() => {
    let labels = document.getElementsByClassName('label');
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.color = 'white';
    }
    document.getElementById(`${label}`).style.color = 'orange';
  }, [label])

  function selectLabel(id) {
    const all = document.getElementsByClassName(label);
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = 'none';
    }
    const labels = document.getElementsByClassName(id);
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.display = 'block';
    }
    setLabel(id);
  }
  return (
    <div id='Portfolio'>
      <nav className='labels'>
        <p className='label' id='all' onClick={() => selectLabel('all')}>All</p>
        <p className='label' id='webDesign' onClick={() => selectLabel('webDesign')}>Web Design</p>
        <p className='label' id='webApp' onClick={() => selectLabel('webApp')}>Web Applications</p>
        <p className='label' id='mobApp' onClick={() => selectLabel('mobApp')}>Mobile Apps</p>
      </nav>
      <div className='all_containers'>
        <div className='all mobApp'>
          <div className='img_box'>
            <img className='img' src="src/assets/DigiLibrary-mobile.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>DigiLibrary - android app</h4>
            <p className='label_text'>Mobile App</p>
          </div>
        </div>
        <div className='all webApp'>
          <div className='img_box'>
            <img className='img' src="src/assets/DigiLibrary.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>DigiLibrary</h4>
            <p className='label_text'>Web Development</p>
          </div>
        </div>
        <div className='all webDesign'>
          <div className='img_box'>
            <img className='img' src="src/assets/spotify.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>Spotify Clone</h4>
            <p className='label_text'>Web Development</p>
          </div>
        </div>
        <div className='all webApp'>
          <div className='img_box'>
            <img className='img' src="src/assets/DigiLibrary.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>DigiLibrary</h4>
            <p className='label_text'>Web Development</p>
          </div>
        </div>
        <div className='all webApp'>
          <div className='img_box'>
            <img className='img' src="src/assets/tvs.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>TVS</h4>
            <p className='label_text'>Web Development</p>
          </div>
        </div>
        <div className='all'>
          <div className='img_box'>
            <img className='img' src="src/assets/DigiLibrary-mobile.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>ebook</h4>
            <p className='label_text'>Web Development</p>
          </div></div>
        <div className='all mobApp'>
          <div className='img_box'>
            <img className='img' src="src/assets/DigiLibrary-mobile.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>ebook</h4>
            <p className='label_text'>Mobile App</p>
          </div>
        </div>
        <div className='all webDesign'>
          <div className='img_box'>
            <img className='img' src="src/assets/spotify.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>ebook</h4>
            <p className='label_text'>Web Design</p>
          </div>
        </div>
        <div className='all webDesign'>
          <div className='img_box'>
            <img className='img' src="src/assets/tvs.png" alt="" />
          </div>
          <div className='text_box'>
            <h4>Spotify clone</h4>
            <p className='label_text'>Web Development</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio