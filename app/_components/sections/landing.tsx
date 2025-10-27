'use client'
import React, { useState } from 'react'
import MainModal from '../modals/main'

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="px-4 py-8 md:py-16 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <img 
              src="/assets/main.png" 
              alt="Main" 
              className="w-full max-w-md h-auto rounded-lg"
            />
            <p 
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer underline text-center md:hidden"
            >
              Enter
            </p>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto pb-8">
          <p className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">
            Privacy Church is a living guide to digital privacy, uniting knowledge, tools and people that care. We translate the chaos of digital life into something you can actually act on: to show you why privacy matters, who is fighting for it, and how you can join them.
          </p>
        </div>
      </div>

      <MainModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}