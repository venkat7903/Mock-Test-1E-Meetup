import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import RegisterContext from './Context/RegisterContext'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    name: '',
    activeTopic: {
      id: 'ARTS_AND_CULTURE',
      displayText: 'Arts and Culture',
    },
  }

  changeIsRegister = () => {
    this.setState({isRegistered: true})
  }

  changeName = data => {
    this.setState({name: data})
  }

  changeActiveTopic = topicObject => {
    this.setState({activeTopic: topicObject})
  }

  render() {
    const {isRegistered, name, activeTopic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          isRegistered,
          name,
          activeTopic,
          changeIsRegister: this.changeIsRegister,
          changeName: this.changeName,
          changeActiveTopic: this.changeActiveTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
