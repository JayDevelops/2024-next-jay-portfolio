import Hero from "@/components/Home/Hero/Hero"
import delay from 'delay';

export default async function Home() {
    await delay(2000)

    return (
        <section className="flex min-h-screen items-center justify-center">
            <Hero />
        </section>
    )
}
