import { render, screen } from "@testing-library/react"
import ResCard from "../components/ResCard"
import "@testing-library/jest-dom";

it("Should render", () => {
    render(ResCard);
    const ratingHeading = screen.getByRole("heading", {name: "Rating"});
    expect(ratingHeading).toBeInTheDocument();
})