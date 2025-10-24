'use client'
import React, { useState } from 'react'
import MainModal from '../modals/main'

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="/assets/main.png" 
              alt="Main" 
              className="w-full h-auto rounded-lg"
            />
            <div className='w-full flex justify-center md:hidden'>
              <p 
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer hover:underline"
              >
                Enter
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <MainModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}