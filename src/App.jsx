import './App.css'
import Button from './components/Button'
import hero from './images/illustration-hero.svg'
import icon from './images/icon-music.svg'

function App({value, className}) {
  return (
    <>
      <div className="App">
        <div className="cardImg">
          <img src={hero} alt="" className="image" />
        </div>
        <div className="cardBody">
          <h1 className="cardHeader">
            Order Summary
          </h1>
          <p className="description">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <div className="planPayment">
            <img src={icon} alt="#" className="icon" />
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
        Coded by <a href="https://github.com/lexzee">Lexzee</a>.
      </div>
    </>
  )
}

export default App
