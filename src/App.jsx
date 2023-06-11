import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="cardImg">
          <img src="./src/images/illustration-hero.svg" alt="" className="image" />
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
                <a href="https://example.html">
                  Change
                </a>
              </div>
              <button className="proceed">
                Proceed to Payment
              </button>
              <button className="cancel">
                Cancel Order
              </button>
            </div>
          </div>
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
