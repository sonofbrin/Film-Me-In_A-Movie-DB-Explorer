import { getByRole, render } from "@testing-library/react"
import MovieCard from "../Components/MovieCard"
import { resultObject } from "./mock-search-results"

test("MovieCard content renders", () => {
    const { getByText, getByAltText } = render(<MovieCard {...resultObject}/>)

    getByAltText(resultObject.title + " poster")
    getByText(resultObject.title)
    getByText("Release: " + (resultObject.release_date ? (new Date(resultObject.release_date).toLocaleDateString()) : "TBA"))
})