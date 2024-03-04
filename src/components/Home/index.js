import {Link} from 'react-router-dom'

import RegisterContext from '../../Context/RegisterContext'

import './styledComponents'

const Home = props => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, name, activeTopic} = value

      const renderNav = () => (
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </nav>
      )

      const onClickReg = () => {
        const {history} = props
        history.replace('/register')
      }

      return (
        <div>
          {renderNav()}
          <div>
            <h1> {isRegistered ? `Hello ${name}` : 'Welcome to Meetup'}</h1>
            <p>
              {isRegistered
                ? `Welcome to ${activeTopic.displayText}`
                : 'Please register for the topic'}
            </p>
          </div>
          {isRegistered ? null : (
            <button type="button" onClick={onClickReg}>
              <Link to="/register">Register</Link>
            </button>
          )}
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
