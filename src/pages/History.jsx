import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

function History() {
  
    const [profile, setProfile] = useState(false)
  return (
    <div className='h-screen'>
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <div className="text-amber-700 text-3xl font-extrabold cursor-pointer">
      Ticket Wala
    </div>

    <h2 className="text-2xl font-bold text-gray-700 tracking-wide">
      Review Your Orders
    </h2>

    <div
      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center 
      text-3xl cursor-pointer hover:bg-gray-200 transition"
      onClick={() => setProfile(true)}
    >
      🧑🏻
    </div>

  </div>
</nav>

      <div className='w-full h-[87%] text-center flex flex-col items-center justify-center text-4xl'>
        <img src="https://media.istockphoto.com/id/1177049680/vector/movie-tickets-vector-cinema-ticket-design.jpg?s=2048x2048&w=is&k=20&c=26fujc2SlL-xTKYZs0LokhMeHaxxBMtJUqxA1GwJGIs=" alt=""  className='w-[20%]'/>
        No Booking Yet
      </div>
       <Dialog
              open={profile}
              onClose={() => setProfile(false)}
              className="relative z-10"
            >
              <div
                className="fixed inset-0    p-4 pointer-events-none h-full bg-white w-[30%] mx-[70%]"
              >
                <div
                  className="pointer-events-auto"
                  onMouseEnter={() => setProfile(true)}
                onMouseLeave={() => setOrder(false)}
                >
                  <DialogPanel className=" rounded-lg  max-w-4xl shadow-5xl flex flex-col">
                    <div className='w-full flex flex-col gap-10'>
                      <h1 className='text-3xl bg-white w-full shadow-lg p-3 rounded-2xl'>Profile</h1>
                      <div className='flex gap-5'>
                        <p className='w-15 h-15 rounded-full border flex justify-center items-center bg-indigo-500 text-white text-xl'>U</p>
                        <div>
                          <h2 className='font-bold text-xl'>User</h2>
                          <h3>Email</h3>
                        </div>
                      </div>
                      <div className='flex justify-between w-full   bg-white text-sm text-center items-center h-10 shadow-lg rounded-xl px-3'><h3 className=' bg-white '>View All Booking </h3> <h3>➪</h3></div>
                      <p className=' font-bold'>Support</p>
                      <div className='shadow-lg rounded-2xl p-3'>
                        <div className='flex justify-between w-full   bg-white text-sm text-center items-center h-10 rounded-xl '><h3 className=' bg-white'>Frequently Asked Question</h3> <h3>➪</h3></div>
                        <hr className='text-gray-400 '></hr>
                        <div className='flex justify-between w-full   bg-white text-sm text-center items-center h-10 rounded-xl '><h3 className=' bg-white'>Contact Us</h3> <h3>➪</h3></div>
                        </div>
                        <p className=' font-bold'>More</p>
                        <div className='flex justify-between w-full  ronded bg-white text-sm text-center items-center h-10 shadow-lg rounded-xl px-3'><h3 className=' bg-white '>Term and Conditions </h3> <h3>➪</h3></div>
                        
                        <div className='flex justify-between w-full  ronded bg-white text-sm text-center items-center h-10 shadow-lg rounded-xl px-3'><h3 className=' bg-white '>Logout </h3> </div>
      
                      
      
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
    </div>
  )
}

export default History
