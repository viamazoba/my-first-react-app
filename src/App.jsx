import React from 'react'
import './App.css'

function App() {

  return (
    <React.Fragment>
      <main className="main-container">
        <h1>404 NOT FOUND</h1>
        <div className="main-container--principal">

          <div className="main-container--image-container">
            <img src="../public/img/scarecrow.png" alt="Imagen" id="imagen"/>
          </div>

          <div className="main-container--text-container">

            <h2>I have bad news for you</h2>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
            <button>BACK TO HOMEPAGE</button>

          </div>

        </div>
        <div className="attribution">
          <p className="developers">Coded by <strong><a href="#"> Víctor Mazo & Edwin Vásquez</a></strong>.</p>
        </div>
      </main>
    </React.Fragment>
  )
}

export default App
