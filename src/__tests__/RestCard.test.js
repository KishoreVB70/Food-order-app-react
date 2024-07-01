import { render, screen } from "@testing-library/react"
import ResCard from "../components/ResCard"
import "@testing-library/jest-dom";
import data from "../mocks/restCard.json";

it("Should render", () => {
    render(<ResCard data={data} />);
    const ratingHeading = screen.getByRole("img");
    expect(ratingHeading).toBeInTheDocument();
})