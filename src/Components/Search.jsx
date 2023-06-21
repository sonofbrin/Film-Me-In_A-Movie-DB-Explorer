import MovieCard from "./MovieCard"
import {useState, useEffect} from "react"

export default function Search() {
    const [searchResults, setSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?" +
                "api_key=8445ca65a7847b91130d9d7e7b676951" +
                `&query=${searchTerm}` +
                `&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(prevResults => data.results)
                setPageCount(prevCount => data.total_pages)
            })
    }, [searchTerm, currentPage])
    
    function handleInputChange(event) {
        event.preventDefault()
        setSearchTerm(prevTerm => event.target.value)
        setCurrentPage(prevPage => 1)
    }

    function handlePageForward(event) {
        setCurrentPage(prevPage => prevPage + 1)
    }

    function handlePageBack(event) {
        setCurrentPage(prevPage => prevPage - 1)
    }
    
    // Generate card components from result data
    const resultCards = searchResults.map(result => (
        <MovieCard
            key={result.id}
            {...result}
        />
    ))

    return (
        <main>
            <form>
                <input 
                    type="text"
                    placeholder="Title"
                    onChange={handleInputChange}
                    value={searchTerm}
                />
                <button type="button" onClick={currentPage > 1 ? handlePageBack : () => {}}>Prev</button>
                <button type="button" onClick={currentPage < pageCount ? handlePageForward : () => {}}>Next</button>
            </form>

            {resultCards.length > 0 && 
                <p id="page-counter">Roll {currentPage} of {pageCount}</p>
            }

            <section id="results">
                {resultCards.length > 0 || !searchTerm ? resultCards : "No film to be found!"}
            </section>
        </main>
    )
}