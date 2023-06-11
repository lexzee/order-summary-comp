import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App({value, className}) {
  return (
    <>
      <div className="App">
        <div className="cardImg">
          <img src="./src/images/illustration-hero.svg" alt="" className="image" />
        </div>
        <div className="cardBody">
          <h1 className="cardHeader">
            Order Summary
          </h1>
          <p className="description">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <div className="planPayment">
            <img src="./src/images/icon-music.svg" alt="#" className="icon" />
            <div className="planDet">
              <p className="subHeader">
                Annual Plan
              </p>
              <p>
                $59.99/year
              </p>
            </div>
            <div className="change">
              <a href="https://example.com">
                Change
              </a>
            </div>
          </div>
          <Button value="Proceed to Payment" className="proceed" />
          <Button value="Cancel Order" className="cancel" />
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
