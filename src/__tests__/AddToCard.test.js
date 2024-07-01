import { render } from "@testing-library/react"
import RestaurantAccordian from "../components/RestaurantAccordian";
import Restaurant from "../components/Restaurant";
import data from "../mocks/mockRestaurantMenu.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(data)
    })
})
it("should render accordian page", () => {
    render(<Restaurant />);


})