"use client"
import Link from "next/link"
import * as React from "react"
import menuItems from "@/components/MenuItems/menuItems"
import {usePathname} from 'next/navigation'
import classNames from "classnames";

export default function MenuItemsList() {
    const currentPath = usePathname();

    return (
        <div className="hidden md:flex-1 justify-self-center md:block md:pb-0 md:mt-0">
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {menuItems.map((item, index) => (
                    <li
                        key={`menu-item-${index}`}
                        className={classNames({
                                'text-primary/80': item.path === currentPath,
                                'text-secondary-foreground ': item.path !== currentPath,
                                'transition-colors': true,
                                'hover:text-primary transition-all text-sm': true,
                            })}
                    >
                        <Link href={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}