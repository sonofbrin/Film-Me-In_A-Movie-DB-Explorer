import { render, screen, act, fireEvent } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
import Search from "../Components/Search"
import { noResult, bionicleResults } from "./mock-search-results"

global.fetch = jest.fn()

function mockFetchResults(mockResults) {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockResults)
        })
    )
}

test("Search content renders", async () => {
    mockFetchResults(noResult)
  
    await act(async () => render(<Search />))

    screen.getByPlaceholderText("Title")
    screen.getByText("Prev")
    screen.getByText("Next")

  
})

test("Shows all results for 'bionicle'", async () => {
    mockFetchResults(bionicleResults)

    await act(async () => render(<Search />))

    screen.getByText("Bionicle: Mask of Light")
    screen.getByText("Bionicle 2: Legends of Metru Nui")
    screen.getByText("Bionicle 3: Web of Shadows")
    screen.getByText("Bionicle: The Legend Reborn")
    screen.getByText("Seventh Toa - A BIONICLE Documentary")
})