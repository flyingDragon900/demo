import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import App from './App';
import Challenge01 from './challenges/Challenge01';
import './index.css'
import Challenge02 from './challenges/Challenge02';

ReactDOM.render(
  <>
    <App />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056399.jpg"
      title=" A Netflix Original Series "
      sname="DARK"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://images.indianexpress.com/2021/06/Money-Heist-5-7.jpg?w=630"
      title=" A Netflix Original Series "
      sname="MONEY HEGIST"
      link="https://www.netflix.com/in/title/80192098"
    />
    <Card
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJJIjsFQjQ_QtfRGDsJW2uTu5Klcz0EzXI5IYHQC9vTDVXozjqB_OOIYzXNB8bCDKSTY&usqp=CAU"
      title=" A Netflix Original Series "
      sname="BREAKING BAD"
      link="https://www.netflix.com/in/title/70143836"
    />

    <Challenge01 />
    <Challenge02 />
  </>
  , document.getElementById('root')
)
