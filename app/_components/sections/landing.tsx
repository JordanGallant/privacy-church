'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="px-4 py-8 md:py-16 min-h-screen md:min-h-0 md:h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <img 
              src="/assets/main.png" 
              alt="Main" 
              className="w-full max-w-md h-auto rounded-lg"
            />
            <Link href="/home">
            <p 
              onClick={() => setIsModalOpen(true)}
              className=" font-bold underline text-center"
            >
              Enter
            </p>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <p className="text-base font-bold md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]">
            Privacy Church is a living guide to digital privacy, uniting knowledge, tools and people that care. We translate the chaos of digital life into something you can actually act on: to show you why privacy matters, who is fighting for it, and how you can join them.
          </p>
        </div>
      </div>

    </>
  )
}