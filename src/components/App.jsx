import React from 'react'
import Login from './Login';

var userRegistered= false; 


function App() {
  return (
    <div className='container'>
      <h1>Hello User</h1>
      <Login
      isRegistered={userRegistered}
      />
      </div>
  )
}

export default App
