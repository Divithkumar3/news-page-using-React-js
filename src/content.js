import './content.css'
import React from 'react';
import news_video from '../src/videos/video.mp4';
import news_video1 from '../src/videos/video2.mp4';
import news_video2 from '../src/videos/video3.mp4';
import news_video3 from '../src/videos/video4.mp4';
import news_video4 from '../src/videos/video5.mp4';
import news_video5 from '../src/videos/sports.mp4';
import image from '../src/images/manu.webp';
import image1 from '../src/images/images1.webp';
import image2 from '../src/images/indiawinner24.jpg';
import image3 from '../src/images/niraj.jpg';
import image4 from '../src/images/hockey.jpg';

function table() {
    return (
        <div>
            <div> <p class="c1">Smith tells some exciting News</p>
            <video className='second' src={news_video1} controls></video>
            </div>
            
            <p class="c1">Hot News</p>
<div class="row">
  <div class="column"><video className='third' src={news_video2} controls></video></div>
  <div class="column"><video className='four' src={news_video3} controls></video></div>
  <div class="column"><video className='fifth' src={news_video4} controls></video></div>
</div><br></br>
<p class="c1">Watch sports News And India's Olympic Status</p>
<p class="c2">Manu Bhakar won two Bronze Medal </p>
<div class="row">
     <img src={image} className="manu"></img>
     <img src={image1} className="manu"></img>
</div>
<p class="c2">Team India lifts the T20 World cup 2024</p>
<div>
<img src={image2} class="india"></img>
</div>
<p class="c2">Niraj wins Silver while Nadeem creates Olympic Record</p>
<div>
<img src={image3} class="niraj"></img>
</div>
<p class="c2">Give more support to Hockey-India's Captain Harmanpreet</p>
<div>
<img src={image4} class="hockey"></img>
</div>
        </div>
        
    );
}

export default table;