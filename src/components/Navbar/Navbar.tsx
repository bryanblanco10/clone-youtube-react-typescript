import { useAppDispatch } from '@/store/hooks'
import { updateIsVisible, updateIsVisibleByScreen } from '@/store/states/layoutSlice'
import { menuIcon, youtubeIcon } from '@/utils'
import { useEffect, type FC } from 'react'
import { FiBell } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import { RiVideoAddLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Loader } from '..'

export const Navbar: FC = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px)')
  const dispatch = useAppDispatch()
  const handleMenu = () => {
    dispatch(updateIsVisible())
  }

  const validateMatches = (value: boolean) => {
    if (value) {
      dispatch(updateIsVisibleByScreen(true))
    } else {
      dispatch(updateIsVisibleByScreen(false))
    }
  }

  mediaQuery.addEventListener('change', (event) => {
    validateMatches(event.matches)
  })

  useEffect(() => {
    validateMatches(mediaQuery.matches)
  }, [])

  return (
    <nav className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5">
      <Loader />
      <div className="flex items-center ">
        <button className="menu-btn" onClick={handleMenu}>
          <img src={menuIcon} alt="menu-icon" />
        </button>
        <Link to="/">
          <img src={youtubeIcon} alt="youtube-logo" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            placeholder="Search"
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/19.jpg"
            alt=""
          />
        </div>
      </div>
    </nav>
  )
}
