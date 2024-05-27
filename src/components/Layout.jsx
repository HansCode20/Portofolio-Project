import React from 'react'
import TextAnimate from './TextAnimate'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Skill from '../Pages/Skill'
import Contact from '../Pages/Contact'

const Layout = ({ children }) => {
  return (
    <div>
    <TextAnimate/>
      {children}
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
    </div>
  )
}

export default Layout