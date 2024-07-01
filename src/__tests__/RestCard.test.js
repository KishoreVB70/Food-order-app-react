import { render, screen } from "@testing-library/react"
import ResCard, { withPromoted } from "../components/ResCard"
import "@testing-library/jest-dom";
import data from "../mocks/restCard.json";

it("Should render", () => {
    render(<ResCard data={data} />);
    const ratingHeading = screen.getByRole("img");
    expect(ratingHeading).toBeInTheDocument();
})

it("Should render with promoted label", () => {
    const RestCard = withPromoted(ResCard);
    render(<RestCard data={data} />);
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
})