import Image from 'next/image'

const Header = () => {
  return (
    <header className='p-1'>
      <div className='flex items-center'>
        <Image src='/logo.svg' alt='Minecraft API for Web' width={64} height={64} />
        <h1 className='text-2xl'>Minecraft API for Web</h1>
      </div>
    </header>
  )
}

export default Header
