import React, {useState} from 'react'
import reactheader from "../logo/reactheader.png"
import reactmain from "../logo/reactmain.png"

function Layout() {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className="container">
        <header className={darkMode ? "header-dark" : "header"}>
          <img className="head-image" src={reactheader} />
          <div className="toogle">
          <span className={darkMode ? "button-text-light-dark" : "button-text-light"}>Light</span>
          <button className={darkMode ? "button-dark" : "button"} onClick={handleClick}>
            <div className={darkMode ? "button-circle-dark" : "button-circle"}></div>
          </button>
          <span className={darkMode ? "button-text-dark-dark" : "button-text-dark"}>Dark</span>
          </div>
        </header>
        <main className={darkMode ? "main-container-dark" : "main-container" }>
        <h1>Fun facts about React</h1>
          <ul className="favor-list">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
          <img className="main-image" src={reactmain} />
        </main>
      </div>
    </>
  )
}

export default Layout