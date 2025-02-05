import React from 'react'
import Nav from './components/Nav'
import { Container } from '@mui/material'
import Blog from './components/Blog'
import MuiAppBar from './components/MuiAppBar'

const App = () => {
  return (
    <Container maxWidth="lg" >
      {/* <Nav /> */}
      <MuiAppBar />
      <Blog />
    </Container>
  )
}

export default App