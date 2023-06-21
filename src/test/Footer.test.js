import { render } from "@testing-library/react";
import Footer from "../Components/Footer";

test("Footer content renders", () => {
    const { getByText } = render(<Footer />);

    getByText("This product uses the TMDB API but is not endorsed or certified by TMDB.");
});