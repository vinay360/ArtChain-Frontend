import React from 'react'
import logo from '../../Assets/logo.jpeg'

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0 flex items-center">
            <img className="block h-8 w-auto" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:block ">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Market
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Owned
              </a>
              <a
                href="#"
                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                For Sale
              </a>
              <a
                href="#"
                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Create
              </a>
              <a
                href="#"
                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Ethereum Tracker
              </a>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end ">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    className="bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 outline-0 placeholder-gray-400 pl-10 pr-3 py-3 w-64"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                    <svg
                      className="h-4 w-4 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.637 13.576a8 8 0 1 1 1.414-1.414l4.142 4.142a1 1 0 0 1-1.414 1.414l-4.142-4.142zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      />
                    </svg>
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
                  Connect Metamask
                </button>
              </div>
            </div>
            <div className="-mr-2 flex items-center">
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
