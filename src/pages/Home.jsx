import React from 'react'
import Content1 from './Content1'

import Movie from './Movie.jsx'
import Upmovie from './Upmovie.jsx'
import Lang from './ExLAng.jsx'
import Genre from './ExGenre.jsx'

function Home() {
  return (
    <div className=''>
      <Content1/>
      <Movie/>
      <Upmovie/>
      <Lang/>
      <Genre/>
    </div>
  )
}

export default Home
