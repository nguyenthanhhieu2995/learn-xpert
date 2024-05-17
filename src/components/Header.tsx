import Hero from "./Hero"
import TopNavbar from "./TopNavbar"

export default function Header() {
    return (
        <div className="container bg-[#E9FFFA] max-w-full w-screen">
            <TopNavbar />
            <Hero />
        </div>

    )
}