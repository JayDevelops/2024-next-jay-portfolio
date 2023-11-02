import emailjs from '@emailjs/browser'

interface EmailForm {
    name: string
    email: string
    message: string
}


export async function sendEmail(emailData: EmailForm) {
    try {
        return await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                from_name: emailData.name,
                to_name: "Jesus Perez",
                from_email: emailData.email,
                to_email: "jesusariasthedeveloper@gmail.com",
                message: emailData.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
    } catch (error) {
        console.error('Email sending failed:', error);
        throw new Error('Email sending failed');
    }
}
