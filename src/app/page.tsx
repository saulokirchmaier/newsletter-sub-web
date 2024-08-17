import Image from 'next/image'

import logo from '@/img/logo.png'
import woman from '@/img/woman.png'

export default function Home() {
  return (
    <main className="h-screen w-full py-14 px-32">
      <Image src={logo} alt="logo" width={120} />
      <Image
        src={woman}
        alt="woman"
        width={530}
        className="absolute bottom-0 right-0"
      />
      <h1 className="text-4xl font-bold">Inscreva-se em nossa newsletter.</h1>
    </main>
  )
}
