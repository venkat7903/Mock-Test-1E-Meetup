import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  changeIsRegister: () => {},
  name: '',
  activeTopic: {},
  changeName: () => {},
  changeActiveTopic: () => {},
})

export default RegisterContext
