import Link from "next/link"
import * as React from "react"
import menuItems from "@/components/Navigation/MenuItems/menuItems"

export default function MenuItemsList() {
    return (
        <div className="hidden md:flex-1 justify-self-center md:block md:pb-0 md:mt-0">
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {menuItems.map((item, index) => (
                    <li key={`menu-item-${index}`} className="text-secondary-foreground hover:text-primary transition-all">
                        <Link href={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}