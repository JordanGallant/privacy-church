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
            <p className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">
              Privacy Church is a living guide to digital privacy, uniting knowledge, tools and people that care. We translate the chaos of digital life into something you can actually act on: to show you why privacy matters, who is fighting for it, and how you can join them.
            </p>
          </div>
        </div>
      </div>

      <MainModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}