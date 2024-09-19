import React from 'react'
import Date from '../Date/Date'
import './Nav.css'
import Input from '../Input/Input'
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown'

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_row">
        <h1 className="nav_logo">Verity</h1>
        <Input />
        <div className="nav_profile" />
      </div>
      <div className="nav_row">
        <Date />
        <LanguageDropDown />
      </div>
    </div>
  )
}

export default Nav