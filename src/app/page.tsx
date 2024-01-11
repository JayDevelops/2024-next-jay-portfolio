import Hero from "@/components/Home/Hero/Hero"
import delay from "delay"
export default async function Home() {
    await delay(3000)
    return (
        <section className="mt-28 md:mt-8 px-24 md:px-8">
            <Hero />
        </section>
    )
}
