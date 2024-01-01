import React from 'react'
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className='flex items-center justify-between w-screen h-24 bg-[#]'>
      <Link className='flex gap-4 items-center h-full w-screen pl-5' href={'/'}>
        <Image src={""} alt='' className='' height={70} width={90} />
        <div className='text-white'>Free Cloud</div>
      </Link>
      <div className='pr-6 text-'>

        <UserButton afterSignOutUrl="/" />
        <SignedOut >
          <SignInButton afterSignInUrl='/dashboard' mode='modal' />
        </SignedOut>
      </div>


    </header>
  )
}

export default Header