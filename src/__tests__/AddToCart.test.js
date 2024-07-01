import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantAccordian from "../components/RestaurantAccordian";
import Restaurant from "../components/Restaurant";
import Cart from "../components/Cart";
import Header from "../components/Header";
import data from "../mocks/mockRestaurantMenu.json";
import "@testing-library/jest-dom";
import { act } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(data)
    })
})

it("should render restaurant page", async() => {
    //1) Render the component
    await act(async() => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Restaurant />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )      
    });

    // 2) Assert if rendered
    const name = screen.getByRole("heading", {name: "Chinese Wok"});
    expect(name).toBeInTheDocument();

    // 3) Obtain the biriyani accordian
    const recommentedAccordian = screen.getByText("Recommended (16)")
    expect(recommentedAccordian).toBeInTheDocument();

    // 4) Click on it
    fireEvent.click(recommentedAccordian);

    // 5) Assert if it opened
    const accordianItems = screen.getAllByTestId("accordianItem");
    expect(accordianItems.length).toBe(16);

    // 6) Click on first add
    const add = screen.getAllByText("Add +");
    fireEvent.click(add[0]);

    // 7) Check cart in header
    const updatedCart = screen.getByText("Cart(1)")
    expect(updatedCart).toBeInTheDocument();

    // 8) check in cart component
    const updatedAccordianItems = screen.getAllByTestId("accordianItem");
    expect(updatedAccordianItems.length).toBe(17);

    // 9) clear cart
    const clearCart = screen.getByRole("button", {"name": "Clear cart"});
    fireEvent.click(clearCart);

    // 10) Check number of items left
    const updatedAccordianItems1 = screen.getAllByTestId("accordianItem");
    expect(updatedAccordianItems1.length).toBe(16);

})