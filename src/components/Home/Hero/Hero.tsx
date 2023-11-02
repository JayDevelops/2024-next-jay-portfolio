import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <section className="mx-auto w-full h-full max-w-5xl px-6 pb-8 flex items-center justify-center md:h-screen md:max-h-[950px] md:max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="md:w-2/5 md:order-1 sm:order-2 md:pr-16 text-left">
                    <h1 className="text-center md:text-left text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight">
                        <span> I&apos;m </span> <span className="text-red-500">Jesus Perez</span>
                    </h1>
                    <p className="mb-8 mt-4 max-w-[30rem] text-left leading-7 md:text-left text-base md:text-[1.125rem] md:leading-[1.5]">
                        I create dynamic full-stack beautiful web apps using MERN and Next.js.
                        I also make iOS/Android Applications in React Native and SwiftUI.
                    </p>
                    <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
                        <Button className="text-left">Hello</Button>
                        <Button variant="secondary" className="text-left">World</Button>
                    </div>
                </div>

                <div className="md:w-[700px] hidden lg:flex items-center justify-center md:order-1">
                    <h2 className="text-center"> Get to know me</h2>
                    <p className="text-center">Hello, this is a little about me...</p>
                </div>
            </div>
        </section>
    )
}