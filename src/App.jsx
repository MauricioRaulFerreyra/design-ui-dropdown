import {
  RiHome6Line,
  RiFolder2Line,
  RiBook3Line,
  RiCalendar2Line,
  RiChat1Line,
  RiMenu3Fill,
  RiCloseLine,
  RiSearch2Line,
  RiNotification3Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
  RiThumbUpLine,
  RiUser3Line,
  RiLogoutCircleRLine,
  RiSettings4Line,
} from "react-icons/ri";
import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/react'

function App() {
  
  const [showMenu,setShowMenu] = useState(false);

  const handleMenu =()=> {
    setShowMenu(!showMenu);
  }

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div className={`fixed top-0 w-3/4 xl:left-0 md:w-[20rem] h-full bg-gray-700 p-8 flex flex-col justify-between z-50 ${showMenu ? "left-0": "-left-full"}`}>
        <div>
          <h1 className="text-2xl uppercase font-bold mb-10">your logo</h1>
          <span className="flex items-center gap-4 hover:bg-gray-600 transition-colors py-2 px-4 rounded-lg">
            <RiHome6Line/> 
            Dashboard
          </span>
          <span className="flex items-center gap-4 hover:bg-gray-600 transition-colors py-2 px-4 rounded-lg">   
            <RiFolder2Line/> 
            Classes
          </span>
          <span className="flex items-center gap-4 hover:bg-gray-600 transition-colors py-2 px-4 rounded-lg">
            <RiBook3Line/>
            Resources
          </span>
          <span className="flex items-center gap-4 hover:bg-gray-600 transition-colors py-2 px-4 rounded-lg">
            <RiCalendar2Line/>
            Learning plane
          </span>
          <span className="flex items-center gap-4 hover:bg-gray-600 transition-colors py-2 px-4 rounded-lg">
            <RiChat1Line/>
            Chat
          </span>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
            className="w-8 h-8 object-cover rounded-full ring-4 ring-white"
          />
          <div>
            <h5 className="font-medium">Mauricio R Ferreyra</h5>
            <p className="text-gray-500 text-sm">Ing. Software</p>
          </div>
        </div>
      </div>
      {/* Btn Mobil */}
      <button className="xl:hidden fixed right-6 bottom-6 bg-slate-500 p-3 rounded-full" onClick={handleMenu}>
        { showMenu ? <RiCloseLine className="text-xl"/> : <RiMenu3Fill className="text-xl"/> }
      </button>
      {/* Header */}
      <header className="fixed bg-gray-600 w-full xl:w-[calc(100%-320px)] xl:ml-[20rem] px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <form>
          <div className="relative">
            <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2"/>
            <input type="text" className="bg-white rounded-full outline-none py-1 pl-8 pr-5" placeholder="Search" />
          </div>
        </form>
        <nav className="flex items-center gap-3 text-lg">
          <Menu>
            <MenuButton className="hover:bg-gray-500 p-2 rounded-full transition-colors">
              <RiChat1Line className="text-gray-100"/>
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <h2 className="w-full text-center text-lg rounded-lg py-1 px-3">
                  Messages
                </h2>
              </MenuItem>
              <div className="my-0.5 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-3 rounded-lg py-0.5 px-3 data-[focus]:bg-white/20">
                  <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="image" className="w-8 h-8 object-cover rounded-full" />
                  <div className="flex flex-col">
                    <h5 className="text-[14px]">Mauricio R Ferreyra</h5>
                    <p className="text-[13px] text-gray-400">Messages here...</p>
                  </div>
                </button>
              </MenuItem>
              <div className="my-0.5 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-3 rounded-lg py-0.5 px-3 data-[focus]:bg-white/20">
                  <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="image" className="w-8 h-8 object-cover rounded-full" />
                  <div className="flex flex-col">
                    <h5 className="text-[14px]">Mauricio R Ferreyra</h5>
                    <p className="text-[13px] text-gray-400">Messages here...</p>
                  </div>
                </button>
              </MenuItem>
              <div className="my-0.5 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-3 rounded-lg py-0.5 px-3 data-[focus]:bg-white/20">
                  <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="image" className="w-8 h-8 object-cover rounded-full" />
                  <div className="flex flex-col">
                    <h5 className="text-[14px]">Mauricio R Ferreyra</h5>
                    <p className="text-[13px] text-gray-400">Messages here...</p>
                  </div>
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
    
          <Menu>
            <MenuButton className="relative hover:bg-gray-500 p-2 rounded-full transition-colors">
              <RiNotification3Line className="text-gray-100"/>
              <RiCheckboxBlankCircleFill className="absolute text-[9px] right-[7px] top-[6px] text-green-400 ring-1 ring-green-100 rounded-full"/>
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <h2 className="w-full text-center text-lg rounded-lg py-1 px-3">
                  Notifications
                </h2>
              </MenuItem>
              <div className="my-0.5 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-3 rounded-lg py-1 px-2 data-[focus]:bg-white/20">
                  <RiThumbUpLine className="w-5 h-5 text-green-300"/>
                    <h5 className="text-[12px]">Mauricio likes your <strong>photo.</strong></h5>
                </button>
              </MenuItem>
              <div className="my-0.5 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-1 rounded-lg py-0.5 px-1 data-[focus]:bg-white/20">
                  <RiChat1Line className="w-6 h-6 text-teal-400"/>
                  <h5 className="text-[12px] leading-3">MF has commented on a <strong>post</strong></h5>
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>

          <Menu>
            <MenuButton className="flex items-center gap-3 hover:bg-gray-500 p-2 rounded-full transition-colors">
              <img 
                src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                className="w-6 h-6 object-cover rounded-full" 
                alt="image" />
              <span className="text-sm text-gray-100">Mauricio R Ferreyra</span>
              <RiArrowDownSLine className="text-gray-100"/>
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-48 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1 px-3 data-[focus]:bg-white/20">
                  <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="image" className="w-6 h-6 object-cover rounded-full" />
                  <div className="leading-4">
                    <h5 className="text-[12px]">Mauricio R Ferreyra</h5>    
                    <p className="text-[12px] text-slate-300">mauricio@gmail.com</p>
                  </div>
                </button>
              </MenuItem>
              <div className="my-0.5 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-3 rounded-lg py-0.5 px-3 data-[focus]:bg-white/20">
                  <RiUser3Line />
                  <h5 className="text-[14px] text-slate-300">Profile</h5>
                </button>
              </MenuItem>
              <div className="my-0.5 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-3 rounded-lg py-0.5 px-3 data-[focus]:bg-white/20">
                  <RiSettings4Line/>
                  <h5 className="text-[14px] text-slate-300">Settings</h5>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-3 rounded-lg py-0.5 px-3 data-[focus]:bg-white/20">
                  <RiLogoutCircleRLine/>
                  <h5 className="text-[14px] text-slate-300">Logout</h5>
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>

        </nav>
      </header>
      <main className="xl:pl-[330px] p-4 pt-36 md:pt-24 xl:pt-28 bg-slate-800 min-h-screen text-slate-400">
        {/* Container Principal */}
      </main>
    </div>
  )
}

export default App
