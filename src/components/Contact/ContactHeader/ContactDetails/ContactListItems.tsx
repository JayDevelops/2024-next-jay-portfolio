import contactDetails from "@/components/Contact/ContactHeader/ContactDetails/contactDetails"
import Link from "next/link"
import React from "react"

interface ListItem {
    text: string
    linkTo?: string | null
}
interface ListItemProps {
    listItems: ListItem[]
}

const ContactItems = ({listItems}: ListItemProps) => {
    return (
        <ul>
            {listItems.map((item, index) => (
                <li key={`item-${index}`} className="text-secondary-foreground">
                    {item.linkTo ? (
                        <Link href={item.linkTo} target="_blank" className="hover:text-primary transition-all">{item.text}</Link>
                    ) : (
                        <span>{item.text}</span>
                    )}
                </li>
            ))}
        </ul>
    )
}
export default function ContactListColumn() {
    return (
        <>
            {contactDetails.map((contactItem, index) => (
                <div key={`${contactItem.title}-${index}`} className="md:col-span-1">
                    <h3 className="text-muted-foreground border-b-2 border-primary rounded-br-lg text-lg uppercase w-2/3 md:w-5/6">
                        {contactItem.title}
                    </h3>
                    <ContactItems listItems={contactItem.listItems}/>
                </div>
            ))}
        </>
    )
}