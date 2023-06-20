import { render, screen, act, fireEvent } from "@testing-library/react"
// import userEvent from "@testing-library/user-event";
import Search from "../Components/Search"
import { noResult, bionicleResults } from "./search-results"

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

test("Shows results for 'bionicle'", async () => {
    mockFetchResults(bionicleResults)

    await act(async () => render(<Search />))

    screen.getByText("Bionicle: Mask of Light")
    screen.getByText("Bionicle 2: Legends of Metru Nui")
    screen.getByText("Bionicle 3: Web of Shadows")
    screen.getByText("Bionicle: The Legend Reborn")
    screen.getByText("Seventh Toa - A BIONICLE Documentary")
})

// // fireEvent
// test("allows users to add items to their list", () => {
//   const { getByText, getByLabelText } = render(<App />);

//   const input = getByLabelText("What needs to be done?");
//   const button = getByText("Add #1");

//   // Simulate user events
//   fireEvent.change(input, { target: { value: "Learn spanish" } });
//   fireEvent.click(button);

//   // Make assertion
//   getByText("Learn spanish");
//   getByText("Add #2");
// });

// // userEvent
// test("user-events allows users to add...", () => {
//   const { getByText, getByLabelText } = render(<App />);

//   const input = getByLabelText("What needs to be done?");
//   const button = getByText("Add #1");

//   userEvent.type(input, "Learn spanish");
//   userEvent.click(button);

//   getByText("Learn spanish");
//   getByText("Add #2");
// });
