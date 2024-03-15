/* eslint-disable testing-library/no-unnecessary-act */
import {fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
  it("Should Search Res List for burger text input", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeSearch.length).toBe(13);
  
    const searchBtn = screen.getByRole("button", { name: "Search" });
  
    const searchInput = screen.getByTestId("searchInput");
  
    fireEvent.change(searchInput, { target: { value: "burger" } });
  
    fireEvent.click(searchBtn);
  
    const cardsAfterSearch = screen.getAllByTestId("resCard");
  
    expect(cardsAfterSearch.length).toBe(2);
  });
  
  it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeFilter.length).toBe(20);
  
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(13);
  });