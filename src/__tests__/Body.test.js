import { render, screen } from "@testing-library/react"
import Body from "../components/Body"
import "@testing-library/jest-dom";
import data from "../mocks/mockJsonDataRestaurants.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        "json": () => Promise.resolve(data)
    })
})

it("Should render with search", async() => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    }
)
    const searchBox = screen.getByPlaceholderText("search");
    expect(searchBox).toBeInTheDocument();
})