interface MenuItem {
    title: string,
    path: string,
}

const menuItems: MenuItem[] = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/skills" },
    //  COME BACK HERE TO BUILD BLOG
    // { title: "Blog", path: "/blog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
]

export default menuItems