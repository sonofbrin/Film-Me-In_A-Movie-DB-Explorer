import { render } from "@testing-library/react"
import Header from "../Components/Header"

test("Header contents render", () => {
    const { getByText, getByAltText } = render(<Header />)

    getByText("Film Me In!")
    getByText("A movie explorer powered by")
    getByAltText("TMDB Logo")
})