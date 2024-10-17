'use client'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/clerk-react'
import { usePathname } from 'next/navigation'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

import SVGLogo from '@/components/SVGLogo'
import Sidebar from '@/components/Sidebar'

import { Menu } from 'lucide-react'

function NavBar() {
  const pathname = usePathname()
  // Check if user is signed in
  const { isSignedIn } = useUser()
  const isSignUpPage = pathname === '/sign-up'

  return (
    <nav className="fixed bg-white border-gray-200 shadow-sm py-3 px-7 w-full flex items-center justify-between ">
      {/* LOGO */}
      <Link href={'/'} className="flex gap-3 items-center ">
        <SVGLogo className="cursor-pointer z-10" />
        <p className="font-bold text-xl">CareAI</p>
      </Link>

      {/* LOGIN / SIGNUP */}
      <div className="flex items-center gap-2">
        {isSignedIn ? (
          <>
            <UserButton />
            <Sheet className="block md:hidden">
              <SheetTrigger asChild>
                <Button variant="outline" className="rounded-full px-2">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side={'left'} className="w-[250px] p-0">
                <SheetHeader className="p-0 py-2 md:p-3">
                  <SheetTitle>Hey, there</SheetTitle>
                  <SheetDescription>Want to navigate around?</SheetDescription>
                </SheetHeader>

                <Sidebar />
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <div className="flex flex-col text-sm">
            <p className="font-medium">
              {isSignUpPage ? 'Already have an account?' : 'New to Care AI?'}
            </p>
            <Link
              href={isSignUpPage ? '/sign-in' : '/sign-up'}
              className="underline hover:no-underline text-primaryTheme"
            >
              {isSignUpPage ? 'Sign In' : 'Create an account'}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
