import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can make a new todo", function() {
    const { getByLabelText, queryByText } = render(<TodoList />);
  
    expect(queryByText("Edit")).not.toBeInTheDocument();
  
    const todoInput = getByLabelText("Todo:");
    const submitBtn = queryByText("Add Todo")
  
    // fill out the form
    fireEvent.change(todoInput, { target: { value: "new todo" }});
    fireEvent.click(submitBtn);

    expect(queryByText("Edit")).toBeInTheDocument();
    expect(queryByText("X")).toBeInTheDocument();
});

it("can edit a todo", function() {
    const { getByRole, getByLabelText, queryByText } = render(<TodoList />);
  
    const todoInput = getByLabelText("Todo:");
    const submitBtn = queryByText("Add Todo")
    fireEvent.change(todoInput, { target: { value: "new todo" }});
    fireEvent.click(submitBtn);

    expect(queryByText("new todo")).toBeInTheDocument();
    const editDiv = queryByText("Edit");
    fireEvent.click(editDiv);

    expect(queryByText("Cancel")).toBeInTheDocument();

    const form = getByRole('form', {name: /edit-todo-form/i})
    const editInput = getByLabelText("Edit:");
    fireEvent.change(editInput, { target: { value: "edit todo" }});
    fireEvent.submit(form);

    expect(queryByText("Edit")).toBeInTheDocument();
});