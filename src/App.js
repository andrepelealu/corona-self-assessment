import React from 'react';
import FetchData from './components/FetchData'
import Herosection from './components/Jumbotron'
import Navbar from './components/Navbar'
import Social from './components/SocialDistancing'
import Gejala from './components/Gejala'

import { Container } from 'reactstrap';

function App() {
  return (
    <>
    <Container fluid>
      <Navbar/>
      <Herosection/>
      <Gejala/>
      <Social/>
      <FetchData/>
    </Container>
    </>
  );
}

export default App;
