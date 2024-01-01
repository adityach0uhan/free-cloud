import React from 'react'
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/ModeToggler';
const Header = () => {
  return (
    <header className='flex items-center justify-between w-screen h-20 border-b-2 border-black'>
      <Link className=' w-screen pl-4' href={'/'}>
        <Image src={"/header_image.png"} alt='' className='' height={50} width={80} />
      </Link>
      <div className='pr-6  flex justify-center gap-2 items-center'>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
        <SignedOut >
          <SignInButton afterSignInUrl='/dashboard' mode='modal' />
        </SignedOut>
      </div>


    </header>
  )
}

export default Header