import React from 'react'
import Login from './pages/Login'
import styled from 'styled-components';

const AppComponent = styled.div`
  width:100%;
  margin: 0 auto;
`

const App = () => {
  return (
    <AppComponent>
      <Login />
    </AppComponent>
  )
}

export default App