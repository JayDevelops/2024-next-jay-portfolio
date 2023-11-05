import React from 'react';
import {Button} from "@/components/ui/button";
import {CaretRightIcon} from "@radix-ui/react-icons";

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
                        className="hover:bg-amber-700 transition-all"
                    >
                        {loading ? (
                            <>
                                <span className="mr-1">Sending...</span><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
                            </>
                            ): (
                            <>
                                Send <CaretRightIcon className="mr-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </>
    )
}