import React from 'react'
import Body from './components/Body'
import {BrowserRouter} from "react-router"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </>
  )
}

export default App