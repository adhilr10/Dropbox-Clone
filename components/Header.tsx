import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"


const Header = () => {
  return (
   <header className="flex items-center justify-between h-[10vh]">
    <Link href="/" className="flex items-center space-x-2">
       
        <div className="bg-[#111] rounded-sm w-fit ml-5">
          <Image 
          src="https://www.shareicon.net/data/128x128/2015/11/08/668675_box_512x512.png"
          width={50}
          height={50}
          alt="logo"
          className="invert"
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
    </Link>
    <div className="px-5 flex space-x-2  items-center">
      <ThemeToggler />

      <UserButton afterSignOutUrl="/"/>

      <SignedOut>
        <SignInButton afterSignUpUrl="/dashboard" mode="modal" />
      </SignedOut>
      </div>
   </header>
  )
}

export default Header