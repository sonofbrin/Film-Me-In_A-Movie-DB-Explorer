import tmdbLogo from "../../public/tmdb-logo.svg"

export default function Header() {
    return (
        <header>
            <h1>Film Me In!</h1>
            <section id="tmdb-attrib">
                <span>A movie explorer powered by </span>
                <img src={tmdbLogo} alt="TMDB Logo"></img>
            </section>
        </header>
    )
}