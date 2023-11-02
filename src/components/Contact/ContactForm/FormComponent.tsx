import React from 'react';
import {Button} from "@/components/ui/button";

interface FormComponentProps {
    form: {
        name: string;
        email: string;
        message: string;
    },
    loading: boolean,
    setForm: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        message: string;
    }>>,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    formRef: React.MutableRefObject<any>
}

export default function FormComponent({ form, loading, handleSubmit, handleChange, formRef }: FormComponentProps) {
    return (
        <>
            {/*FORM BELOW*/}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="form-container mt-12 flex flex-col gap-8"
            >
                <p className="text-muted-foreground"><span className="text-red-600">&#42;</span> indicates required field</p>
                {/* Name Label, Title, and PlaceHolder*/}
                <label className="flex flex-col">
                    <span className="text-secondary-foreground font-medium mb-4">Name<span className="text-red-600">&#42;</span></span>
                    <input type="text" name="name" autoComplete="off" id="name"
                           value={form.name} onChange={handleChange}
                           placeholder="Enter your name here..."
                           className="bg-secondary py-4 px-3 placeholder:text-secondary-foreground rounded-lg outlined none border-none font-medium"
                    />
                </label>

                {/* Email Label, Title, and PlaceHolder*/}
                <label className="flex flex-col">
                    <span className="text-secondary-foreground font-medium mb-4">Email<span className="text-red-600">&#42;</span></span>
                    <input type="email" name="email" autoComplete="off"
                           value={form.email} onChange={handleChange}
                           placeholder="Enter your email here..."
                           className="bg-secondary py-4 px-3 placeholder:text-secondary-foreground rounded-lg outlined none border-none font-medium"
                    />
                </label>

                {/* Message Label, Title, and PlaceHolder*/}
                <label className="flex flex-col">
                    <span className="text-secondary-foreground font-medium mb-4">Message<span className="text-red-600">&#42;</span></span>
                    <textarea rows={7} name="message"
                              value={form.message} onChange={handleChange}
                              placeholder="Write your message here..."
                              className="bg-secondary py-4 px-3 placeholder:text-secondary-foreground rounded-lg outlined none border-none font-medium"
                    />
                </label>

                <div className="text-left">
                    <Button
                        type="submit"
                        className="py-3 px-8 font-bold text-lg w-1/5 bg-primary text-primary-foreground rounded-full hover:bg-amber-700 transition-all"
                    >
                        {loading ? 'Sending...': 'Send'}
                    </Button>
                </div>
            </form>
        </>
    )
}