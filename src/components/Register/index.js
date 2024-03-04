import {Component} from 'react'

import RegisterContext from '../../Context/RegisterContext'

import {} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    name: '',
    activeTopicObj: topicsList[0],
    errorMsg: '',
    showErrorMsg: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = event => {
    const topicObj = topicsList.find(each => each.id === event.target.value)
    this.setState({activeTopicObj: topicObj})
  }

  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {changeIsRegister, changeName, changeActiveTopic} = value
          const {name, activeTopicObj, showErrorMsg, errorMsg} = this.state

          const onSubmitForm = event => {
            event.preventDefault()

            if (name === '') {
              this.setState({
                showErrorMsg: true,
                errorMsg: 'Please enter your name',
              })
            } else {
              changeActiveTopic(activeTopicObj)
              changeName(name)
              changeIsRegister()
              const {history} = this.props
              history.replace('/')
            }
          }

          const renderNav = () => (
            <nav>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
            </nav>
          )

          return (
            <>
              {renderNav()}
              <div style={{display: 'flex'}}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <form onSubmit={onSubmitForm}>
                  <h1>Let us join</h1>
                  <label htmlFor="name">NAME</label>
                  <br />
                  <input
                    id="name"
                    placeholder="Your name"
                    onChange={this.onChangeName}
                    value={name}
                  />
                  <br />
                  <label htmlFor="topic">TOPICS</label>
                  <br />
                  <select
                    id="topic"
                    onChange={this.onChangeTopic}
                    value={activeTopicObj.id}
                  >
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                  <button type="submit">Register Now</button>
                  {showErrorMsg && <p>{errorMsg}</p>}
                </form>
              </div>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
