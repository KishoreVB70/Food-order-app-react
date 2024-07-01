import { render, screen } from "@testing-library/react"
import Body from "../components/Body"
import "@testing-library/jest-dom";
import data from "../mocks/mockJsonDataRestaurants.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        "json": () => Promise.resolve(data)
    })
})

it("Should render with search", () => {
    render(<Body />);
    const searchBox = screen.getByPlaceholderText("search");
    expect(searchBox).toBeInTheDocument();
})