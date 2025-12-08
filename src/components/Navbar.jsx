import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useContext } from 'react'
import { moviecontext, theatrescontext } from '../App';
import { useNavigate } from 'react-router-dom';
import History from '../pages/History'
function Navbar() {
  const [open, setOpen] = useState(false)
  const [opent, setOpent] = useState(false)
  const [order, setOrder] = useState(false)
  const [search, setSearch] = useState(false)
  const [profile, setProfile] = useState(false)
  let { Mov, setMovie } = useContext(moviecontext)
  let { theatres, setMovietheatres } = useContext(theatrescontext)
  const navigate = useNavigate();
  const releasedmov = Mov.filter(movie => movie.released === true)
  return (
    <div className=''>

      <nav className=" top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-md border-b border-gray-200">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
    
     <div
      className="text-amber-800 text-3xl font-extrabold cursor-pointer hover:scale-105 transition"
      onClick={() => navigate('/')}
    >
      Ticket Wala
    </div>
   <div className="hidden md:flex items-center gap-10 text-lg font-medium text-gray-700">
      <a className="hover:text-amber-700 cursor-pointer transition"
         onClick={() => navigate('/')}>
        Home
      </a>
          <a className="hover:text-amber-700 cursor-pointer transition"

            onMouseEnter={() => setOpen(true)}
          >
            Movies
          </a>
          <a  className="hover:text-amber-700 cursor-pointer transition"
 onMouseEnter={() => setOpent(true)}>Theatres</a>
          <a className="hover:text-amber-700 cursor-pointer transition"
onClick={() => setOrder(true)}>Orders</a>


        </div>

            <div className="flex items-center gap-5">
              <input
        type="search"
        placeholder="🔍 Search movies or cinemas"
        onClick={() => setSearch(true)}
        className="border border-gray-300 px-4 py-2 w-72 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
      />
          <div
        className="w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center text-2xl cursor-pointer hover:bg-gray-300 transition"
       onClick={() => setProfile(true)}>🧑🏻</div>
       </div>
        </div>
      </nav>

{/* movies */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 flex my-20 justify-center p-4 pointer-events-none"
        >
          <div
            className="pointer-events-auto"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <DialogPanel className="bg-white rounded-lg w-screen max-w-4xl p-6">
              <DialogTitle className="text-xl font-bold mb-4">Now Playing</DialogTitle>
              <div className="flex flex-wrap gap-4 ">

                {releasedmov.map((v, i) => {
                  return (
                    <div className="flex w-[45%] gap-3 items-center"  onClick={() => { navigate(`/movies/${i}`);}}>
                      <img
                        src={v.poster}
                        alt="Teri Ishk Mein"
                        className="w-20 rounded size-fit h-10"
                      />
                      <div>
                        <p className="font-bold">{v.name}</p>
                        <p>{v.genre} {v.langauage}</p>
                      </div>

                    </div>
                  )
                })}


              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {/* theatres */}
      <Dialog
        open={opent}
        onClose={() => setOpent(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 flex my-20 justify-center p-4 pointer-events-none"
        >
          <div
            className="pointer-events-auto"
            onMouseEnter={() => setOpent(true)}
            onMouseLeave={() => setOpent(false)}
          >
            <DialogPanel className="bg-white rounded-lg w-screen max-w-4xl p-6">
              <DialogTitle className="text-xl font-bold mb-4">Theatres </DialogTitle>
              <div className="flex flex-wrap gap-10 justify-center">
                {theatres.map((v, i) => {
                  return (
                    <div className='w-[45%]'>
                      {v.name}
                      <hr />
                    </div>
                  )
                })}


              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>


      {/* Orders */}
      

      <Dialog
        open={order}
        onClose={() => setOpent(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 flex text-center items-center justify-center p-4 pointer-events-none"
        >
          <div
            className="pointer-events-auto"
            onMouseEnter={() => setOrder(true)}
            onMouseLeave={() => setOrder(false)}
          >
            <DialogPanel className="bg-white rounded-lg w-fit max-w-4xl p-6 shadow-5xl">

              <h1 className='text-4xl text-amber-950 p-10 font-bold' style={{ fontFamily: 'Pacifico' }}>Ticket Wala</h1>
              <form action="#" class="pt-4 md:pt-6">
                <p className='py-5 text-2xl'>Enter your E-mail </p>
                <p className='text-[12px] text-gray-500 p-1'>If you don't have an account yet, we'll create one for you</p>

                <div class="mb-4">

                  <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com" required />
                </div>
                <div>

                  <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                </div>
                <div class="flex items-start my-6">
                  <div class="flex items-center">
                    <input id="checkbox-remember" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" />
                    <label for="checkbox-remember" class="ms-2 text-sm font-medium text-heading">Remember me</label>
                  </div>
                  <a href="#" class="ms-auto text-sm font-medium text-fg-brand hover:underline">Lost Password?</a>
                </div>
                <button type="submit" class="text-white bg-amber-950 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3" onClick={() => { navigate('/history'); setOrder(false); }}>
                  Continue</button>
                <div class="text-sm font-medium text-body">Not registered? <a href="#" class="text-fg-brand hover:underline">Create account</a></div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

{/* search */}
      <Dialog
        open={search}
        onClose={() => setSearch(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 flex text-center items-center justify-center p-4 pointer-events-none"
        >
          <div
            className="pointer-events-auto"
            onMouseEnter={() => setSearch(true)}
            onMouseLeave={() => setOrder(false)}
          >
            <DialogPanel className="bg-white rounded-lg w-screen max-w-4xl p-6">
              <input
                type="search"
                className="border w-[90%] p-2 rounded-md"
                placeholder="🔍 Search for movies, cinemas and more"
                onClick={() => setSearch(true)}
              />
              <DialogTitle className="text-xl font-bold mb-4">Trending</DialogTitle>
              <div className="flex flex-wrap gap-4 ">

                {Mov.map((v, i) => {
                  return (
                    <div className="flex w-[45%] gap-3 items-center"  onClick={() => { navigate(`/movies/${i}`);}}>
                      <img
                        src={v.poster}
                        alt="Teri Ishk Mein"
                        className="w-20 rounded h-10"
                      />
                      <div>
                        <p className="font-bold">{v.name}</p>
                        <p>{v.genre} {v.langauage}</p>
                      </div>

                    </div>
                  )
                })}


              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {/* profile */}
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

export default Navbar



