import { render, screen } from "@testing-library/react"
import RestaurantAccordian from "../components/RestaurantAccordian";
import Restaurant from "../components/Restaurant";
import data from "../mocks/mockRestaurantMenu.json";
import "@testing-library/jest-dom"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(data)
    })
})
it("should render restaurant page", async() => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Restaurant />
            </BrowserRouter>
        )      
    });

    const name = screen.getByRole("heading", {name: "Chinese Wok"});
    expect(name).toBeInTheDocument();
})