interface ContactDetail {
    title: string,
    listItems: {
        text: string,
        linkTo: string | null,
    }[],
}

const contactDetails: ContactDetail[] = [
    {
        title: "Contact Details",
        listItems: [
            { text: "contact@jesusperez.dev", linkTo: "mailto:contact@jesusperez.dev" },
            { text: "+1 (323) 926-2550", linkTo: "tel:+13239262550" }
        ]
    },
    {
        title: "Business Details",
        listItems: [
            { text: "Location: Montebello, California", linkTo: null }
        ]
    },
    {
        title: "Other Socials",
        listItems: [
            {text: "Instagram", linkTo: "https://www.instagram.com/jay.develops"},
            {text: "LinkedIn", linkTo: "https://www.linkedin.com/in/jesusperezarias/"},
            {text: "Twitter", linkTo: "https://twitter.com/jay_develops"},
            {text: "BlueSky", linkTo: "https://bsky.app/profile/jesusperez.dev"},
        ]
    }
]
export default contactDetails