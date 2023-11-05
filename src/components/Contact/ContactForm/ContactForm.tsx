"use client"
import React, {useRef, useState} from "react"
import {toast} from "sonner"
import FormComponent from "./FormComponent"
import {sendEmail} from "@/components/Contact/ContactForm/emailService"


export interface ProcessEnv {
    [key: string]: string | undefined
}


export default function ContactForm() {
    //  Use the reference from the form, properties on the jsx
    const formRef = useRef()

    //  Track the user state of the form, initially it will be empty with the input fields
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    //  Track the loading state of the email being sent to us back
    const [loading, setLoading] = useState(false)

    //  Function to handle a change when the user starts typing into the form itself
    const handleChange = (e: { target: any; }) => {
        // get the value, and get the target on the input labels
        const { target } = e;
        const { name, value } = target

        // finally, send the ...form props to the value of the input label type
        setForm({
            ...form,
            [name]: value,
        })
    }

    //  Function to handle the user when they click the 'submit' button on the form
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoading(true)

        if (!form.message || !form.email || !form.name) {
            setLoading(false)
            toast.error(`${form.name} please fill out all input values such as your name, email, and message body completely.`)
            return
        }

        try {
            await sendEmail(form)
            setLoading(false)
            toast.success(`Thank you ${form.name}, I will get back to your message as soon as possible!`)
            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setLoading(false)
            toast.error("An unknown error occurred, please try contacting me directly: contact@jesusperez.dev")
        }
    }

    return (
        <FormComponent
            form={form}
            loading={loading}
            setForm={setForm}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formRef={formRef}
        />
    )
}