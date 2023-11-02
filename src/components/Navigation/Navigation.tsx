"use client"

import * as React from "react"
import Link from "next/link"
import ModeToggle from "@/components/ui/ToggleMode"
import { Twirl as Hamburger } from 'hamburger-react'
import MenuItemsList from "@/components/Navigation/MenuItems/MenuItemsList"
import MobileNavigation from "@/components/Navigation/MobileNavigation"

export default function Navbar() {
    const [isMobile, setIsMobile] = React.useState(false)


    return (
        <nav className="w-full border-b md:border-0 bg-secondary shadow-md fixed top-0 z-50">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-primary">JP</h1>
                    </Link>
                    <div className="md:hidden flex items-center space-x-4 justify-end">
                        <ModeToggle />
                        <button id="menu-toggle" className="menu-toggle" aria-label="Toggle to open and close menu">
                            <Hamburger toggled={isMobile} toggle={setIsMobile} label="menu-toggle"/>
                        </button>
                    </div>
                </div>

                {/*Desktop Navigation*/}
                <MenuItemsList />
                {isMobile && (
                    <MobileNavigation closeMenu={() => setIsMobile(false)} isMobile={isMobile} />
                )}
                <div className="hidden md:block">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}