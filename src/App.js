import React from 'react';

import Navbar from './components/Navbar'
import ContainerComponent from './components/Container'
import Result from './components/Result'
import Assessment from './components/Assessment' 
import Footer from './components/Footer'
import {Route,Switch} from 'react-router-dom'
import { Container } from 'reactstrap';


function App() {
  return (
    <>
    
    <Container fluid>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={ContainerComponent}/>
      
      <Route exact path="/test-corona" component={Assessment}/>
      <Route exact path="/hasil" component={Result}/>

      </Switch>
      <Footer/>

    </Container>
    
    </>
  );
}

export default App;
