'use client'

import Image from 'next/image'

import logo from '@/img/logo.png'

export default function Page() {
  return (
    <main className="h-screen w-full p-4 md:py-14 md:px-32">
      <Image src={logo} alt="logo" width={120} />
      <div className="flex flex-col justify-center text-center h-full">
        <h1 className="text-4xl font-bold text-white mb-8">
          Obrigado por se inscrever!
        </h1>
        <p className="font-extralight">
          Você já começará a receber nossas comunicações.
        </p>
      </div>
    </main>
  )
}
