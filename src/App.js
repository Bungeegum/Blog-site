import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import {Router } from './components/Router'
import Dynamic from './containers/Dynamic'
import Header from './components/Header'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
    <React.Suspense fallback={<em>Loading...</em>}>
      <Header/>
      <div className="content">
        
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        
      </div>
    </React.Suspense>
     
    </Root>
  )
}

export default App
