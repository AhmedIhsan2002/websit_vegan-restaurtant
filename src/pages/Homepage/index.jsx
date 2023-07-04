import React from 'react'
import Header from '../../components/Header/Header'
import Aboutsus from '../Homepage/sections/Aboutus_sec/Aboutsus'
import Cards from './sections/Cards/Cards'
import Our_Menu from './sections/Our_MENU/index'
import Blogs from './sections/Bloge-sec/Blogs'
import Cooking from './sections/Cooking-sec/Cooking'
import Clints from './sections/Clint/Clints'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Aboutsus />
      <Cards />
      <Our_Menu />
      <Blogs />
      <Cooking />
      <Clints />
    </div>
  )
}

export default HomePage
