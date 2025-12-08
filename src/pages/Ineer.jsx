import React, { useContext,useState } from 'react'
import { useParams } from 'react-router-dom'
import { moviecontext,theatrescontext } from '../App'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import ExGenre from './ExGenre';
import ExLAng from './ExLAng';
import Upcoming from './Upcoming';
import Upmovie from './Upmovie';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';
function Ineer() {
  const { id } = useParams();          
  const { Mov } = useContext(moviecontext); 
   let {theatres}=useContext(theatrescontext);
   let [view ,setView] =useState(false)
  const movie = Mov[id];                 
const now =new Date();
  if (!movie) return <h2>Movie Not Found</h2>;

  return (
    <>
    <div className='p-10 w-[70%] m-auto'>
        <div className='flex gap-5 p-3 '>
            <img src={movie.poster} alt="" height={"150px"} width={"100px"}  className='border'/>
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-2xl'>{movie.name}</p>
                <p className='text-gray-400'>{movie.genre} | {movie.langauage} | {movie.length}</p>
                <button className='border px-3 rounded flex justify-center text-center py-1 w-[50%]' onClick={()=>setView(true)}>View details</button>
            </div>
        </div>
        <hr className='text-gray-300 m-3'/>
        <div className='flex gap-3 '>
            <div className=' bg-gray-100 text-amber-400 rounded py-2 px-3 text-3xl '>A</div>
            <div>
            <p className='text-[14px]'>Movie  suitable  for  adults(18+ Years) only</p>
            <p className='text-[14px]'>Please carry  your IDs with birth date for verification</p>
            </div>
        </div>
        <div className='flex gap-3 '>
            {/* {(now.getMonth()+1).toString()} */}
                      <p className='border bg-gray-100 text-amber-400 rounded-2xl m-2 px-3 border-none text-center flex items-center'>
dec</p> 
          <div className='border bg-gray-100 rounded  px-3 border-none'><p className='text-2xl'>{now.getDate()}</p>  
         {/* <p className=''>{now.getDay()}</p> */}
           </div>        
             <div className='border bg-gray-100 rounded  px-3 border-none'><p className='text-2xl'>{now.getDate()+1}</p>  
         {/* <p className=''>{now.getDay()+1}</p> */}
           </div>    
             <div className='border bg-gray-100 rounded  px-3 border-none'><p className='text-2xl'>{now.getDate()+2}</p>  
         {/* <p className=''>{now.getDay()+2}</p> */}
           </div>    
             <div className='border bg-gray-100 rounded  px-3 border-none'><p className='text-2xl'>{now.getDate()+3}</p>  
         {/* <p className=''>{now.getDay()+3}</p> */}
           </div>    
        </div>
         <div className='flex gap-3 p-5'>
        <button className='border-1 px-3 rounded border-gray-300'>Filter </button>
        <button className='border-1 px-3 rounded border-gray-300'>After 10 PM</button>
        <button className='border-1 px-3 rounded border-gray-300'>Premium Seats</button>
       
      </div>
      
        <hr className='text-gray-300 m-3'/>
        <div className='bg-gray-300 flex w-[98%] gap-5 m-auto'>
            <p className='flex justify-center items-center gap-3 px-3 py-2'><p className='w-2 h-2 rounded-full bg-black' ></p> Available</p>
            <p className='flex justify-center items-center gap-3 px-3'><p className='w-2 h-2 rounded-full bg-yellow-400' ></p> Filling fast</p>
            <p className='flex justify-center items-center gap-3 px-3'><p className='w-2 h-2 rounded-full bg-orange-400' ></p>  Almost full</p>
          
           
        </div>
        <div>
        {theatres.map((v,i)=>{
            return(
                <div>
                   <div className='flex justify-between p-7'>
                     <div className='flex gap-5'>
                        <img src={v.image} alt=""  height={"50px"} width={"50px"} className='rounded-full border'/>
                        <div>
                        <p className='font-bold text-xl'>{v.name}</p>
                        <p className='text-[12px] text-gray-500' >{v.location} </p>
                        </div>
                        </div>
                        <p>🤍</p>
                    </div>
                    <div className='flex flex-wrap gap-5'>
                            {v.movies.map((value,index)=>{
                                return(
                                 <div className='border px-7 rounded justify-center items-center w-[20%]'>
                            <p className='text-center'>{value.time}</p>
                            <p className='text-center text-gray-500'>RECLINERS</p>
                        </div>
         ) })}
                           
                      
                            
                    </div>
                </div>

            )
        })}
        </div>
           <ExLAng/>
        <ExGenre/>
     
    </div>
    <Upmovie/>


    
          <Dialog open={view} onClose={() => setView(false)} className="relative z-20">
  <div className="fixed inset-0 flex justify-center items-start p-4 overflow-y-auto">
    <div className="pointer-events-auto w-full">
      <DialogPanel className="bg-white rounded-lg p-6 shadow-5xl w-[40%] max-w-3xl mx-auto">

   
                  <h2 className='font-bold text-xl '>Movie Details</h2>
                  
                  <h3 >{
                    movie.name
                  }</h3>
                  <div className='flex justify-between py-3'> 
                    <p className='font-bold text-14 hover:border-b-1 border-blue-500 ' >Reviews</p>
                    <p className='font-bold text-14 hover:border-b-1 border-blue-500 '>Synopsis</p>
                    <p className='font-bold text-14 hover:border-b-1 border-blue-500 '>Cast</p>
                    <p className='font-bold text-14 hover:border-b-1 border-blue-500 '>Video</p>
                    <p className='font-bold text-14 hover:border-b-1 border-blue-500 '>Posters</p>
                  </div>

                 <div>
  <h3 className=' font-bold py-8'>Reviews</h3>
<div className='flex justify-around gap-5 flex-wrap'>
{movie.reviews.map((rev, index) => (
  <div key={index} className=' p-3 w-[30%]'>
    <p className="text-bold">{rev.rating}/5</p>
    <p>{rev.platform}</p>
  </div>
  
))}
</div></div>
 <style>
{`
  .swiper-button-next,
  .swiper-button-prev {
    width: 15px !important;
    height: 15px !important;
    border-radius: 50%;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 14px !important;
    color: white;
  }
`}
</style>

<Swiper
  slidesPerView={2}
  spaceBetween={20}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[ Navigation]}
  className="w-full mt-4"
>
  {movie.reviews?.map((rev, index) => (
    <SwiperSlide
      key={index}
      className="border p-4 rounded-lg bg-white text-black shadow-md"
    >
      <div className="flex justify-between">
        <p className="font-bold">{rev.platform}</p>
        <p>⭐ {rev.rating}</p>
      </div>
      <p className="mt-2 text-gray-700">{rev.review}</p>
    </SwiperSlide>
  ))}
</Swiper>
 
  <h3 className=' font-bold py-8'>Synopsis</h3>
  <p className='text-gray-400'>{movie.description}</p>

<div className='flex flex-col gap-5 py-2'>
  <p> A</p>
  <p>{movie.langauage}</p>
  <p> {movie.category}</p>
  </div>

  <h3 className=' font-bold py-8'>Cast</h3>
<div className='flex flex-wrap gap-4'>
  {movie.cast.map((v,i)=>{
return(
  <div>
                        <img src={v.image} alt=""   className='rounded-full border w-20 h-20 '/>
    <p className='text-center font-bold'>{v.name}</p>
  </div>
)
  })}
  <div>

    
  </div>
</div>

  
  <h3 className=' font-bold py-8'>Video</h3>

            <iframe width="500" height="300" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='m-auto'></iframe>

     
  




  <h3 className=' font-bold py-8'>Posters And Wallpaper</h3>
<img src={movie.poster} alt="" className='h-100 m-auto w-100'/>




 
        
      </DialogPanel>
    </div>
  </div>
</Dialog>

    </>
  );
}

export default Ineer;
