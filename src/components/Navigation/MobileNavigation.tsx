import {AnimatePresence, motion} from "framer-motion"
import Link from "next/link"
import * as React from "react"
import menuItems from "@/components/Navigation/MenuItems/menuItems"
import {accordion, listAccordion} from "@/components/Navigation/NavAnimate/NavAnimate"
import {useState} from "react"

interface MobileNavigationProps {
    isMobile: boolean,
    closeMenu: () => void,
}

export default function MobileNavigation({ closeMenu, isMobile }: MobileNavigationProps) {
    const [shouldAnimateExit, setShouldAnimateExit] = useState(false)

    const handleLinkClick = () => {
        setShouldAnimateExit(true)
        closeMenu()
    }

    return (
        <AnimatePresence>
                {isMobile && (
                    <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={accordion}
                        className="flex-1 justify-self-center pb-2 mt-2 md:pb-0 md:mt-0 block md:hidden overflow:hidden"
                    >
                        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={`list-key-${index}`}
                                    variants={listAccordion}
                                    className="text-secondary-foreground hover:text-primary transition-all"
                                    onClick={handleLinkClick}>
                                    <Link href={item.path}>{item.title}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
        </AnimatePresence>
    )
}