import React, { useContext } from 'react'
import { moviecontext } from '../App'
import ExLAng from './ExLAng'
import ExGenre from './ExGenre'
import { Navigate, useNavigate } from 'react-router-dom'

function Upcoming() {
    let {Mov,setMovie}=useContext(moviecontext)
    const upcomingmovies = Mov.filter(movie => movie.released === false)  
    const releasedmovies = Mov.filter(movie => movie.released !== false)
      const navigate = useNavigate();
  return (
    <div>
    <div className='p-5 m-10 '>
     <h2 className='text-3xl font-bold'>Upcoming Movies</h2>
      <div className='flex gap-3 p-5'>
        <button className='border-1 px-3'>filter </button>
        <button className='border-1 px-3'>Top  Selling</button>
        <button className='border-1 px-3'>English</button>
        <button className='border-1 px-3'>Hindi</button>
        <button className='border-1 px-3'>Romance</button>
        <button className='border-1 px-3'>Drama</button>
        <button className='border-1 px-3'>3D</button>
      </div>
       <div className='flex gap-10 w-full flex-wrap p-3'>
        {
          upcomingmovies.map((v,i)=>{return(
            
<div  className='w-[22%] h-[450px] border-1   rounded-b-lg '  onClick={() => { navigate(`/movies/${i}`);}}>
            <img src={v.poster} alt="" className='w-full h-[85%] ' />
            <p className='px-5 font-bold'>{v.name}</p>
            <p className='px-5'>{v.genre},{v.langauage}</p>
        </div>
            

          )})
        }
        
         
        

      </div>
    </div>
    <div className='p-5 m-10 '>
     <h2 className='text-3xl font-bold'>Book your Favourite Movie</h2>
    
       <div className='flex gap-10 w-full flex-wrap p-3'>
        {
          releasedmovies.map((v,i)=>{return(
            
<div  className='w-[22%] h-[450px] border-1   rounded-b-lg '  onClick={() => { navigate(`/movies/${i}`);}}>
            <img src={v.poster} alt="" className='w-full h-[85%] ' />
            <p className='px-5 font-bold'>{v.name}</p>
            <p className='px-5'>{v.genre},{v.langauage}</p>
        </div>
            

          )})
        }
        
         
        

      </div>
    </div>
    <ExLAng/>
    <ExGenre/>
    </div>
  )
}

export default Upcoming
