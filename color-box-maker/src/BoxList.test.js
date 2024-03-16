import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can create a new box", function() {
    const { getByLabelText, queryByText } = render(<BoxList />);
  
    expect(queryByText("X")).not.toBeInTheDocument();
  
    const nameInput = getByLabelText("Width");
    const qtyInput = getByLabelText("Height");
    const colorInput = getByLabelText("Color");
    const submitBtn = queryByText("Create Box")
  
    // fill out the form
    fireEvent.change(nameInput, { target: { value: 200 }});
    fireEvent.change(qtyInput, { target: { value: 200 }});
    fireEvent.change(colorInput, { target: { value: 'blue' }});
    fireEvent.click(submitBtn);
  
    expect(queryByText("X")).toBeInTheDocument();
});