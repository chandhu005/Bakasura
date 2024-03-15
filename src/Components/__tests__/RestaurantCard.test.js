import {render,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

test("should render ResturantCard components from Props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name=screen.getByText("Temperature");
    expect(name).toBeInTheDocument(); 
});