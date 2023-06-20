import { render } from "@testing-library/react";
import Header from "../Components/Header";

test("Header contents render", () => {
  const { getByText } = render(<Header />);

  getByText("Film Me In!");
});