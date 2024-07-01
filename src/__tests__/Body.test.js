import { fireEvent, render, screen } from "@testing-library/react"
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

it("Should render with 8 cards before search and 1 after search", async() => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })
    const resCardBeforeSearch = screen.getAllByTestId("resCard");
    expect(resCardBeforeSearch.length).toBe(8);


    const searchBox = screen.getByPlaceholderText("search");
    const searchButton = screen.getByTestId("searchBtn");

    fireEvent.change(searchBox, {target: {value: "chinese"}});
    fireEvent.click(searchButton);

    // Check if only one resCard
    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(1);

})