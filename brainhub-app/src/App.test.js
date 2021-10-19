import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";
import EventComponent from "./containers/EventComponent";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import EventListComponent from "./containers/EventListComponent";

const server = setupServer(
  rest.get("http://localhost:3001/events", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          events: [
            {
              firstName: "mockFirstName",
              lastName: "mockLastName",
              email: "m@o.ck",
              date: new Date(2222, 2, 2),
            },
          ],
        },
      })
    );
  }),
  rest.post("http://localhost:3001/events", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        data: {
          events: [
            {
              firstName: req.data.firstName,
              lastName: "mockLastName",
              email: "m@o.ck",
              date: new Date(2222, 2, 2),
            },
          ],
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("visible header", () => {
  render(<App />);
  const header = screen.getByText(/Brainhub recruitment task/i);
  expect(header).toBeInTheDocument();
});

test("visible row", async () => {
  render(<App />);

  await waitFor(() => {
    const header = screen.getByText(/mockFirstName/i);
    expect(header).toBeInTheDocument();
  });
});

test("form includes all input fields", () => {
  render(<App />);
  const firstNameInput = screen.getByTestId("firstName");
  const lastNameInput = screen.getByTestId("lastName");
  const emailInput = screen.getByTestId("email");
  const dateInput = screen.getByTestId("date");
  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
});

test("empty form submit", async () => {
  render(<App />);
  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);
  await waitFor(() => {
    const requiredFNMsg = screen.getByText(/firstName is a required field/i);
    const requiredLNMsg = screen.getByText(/lastName is a required field/i);
    const requiredEmailMsg = screen.getByText(/email is a required field/i);
    const requiredDAteMsg = screen.getByText(/date is a required field/i);
    expect(requiredFNMsg).toBeInTheDocument();
    expect(requiredLNMsg).toBeInTheDocument();
    expect(requiredEmailMsg).toBeInTheDocument();
    expect(requiredDAteMsg).toBeInTheDocument();
  });
});

test("invalid email", async () => {
  render(<App />);
  const emailInput = screen.getByTestId("email");
  fireEvent.change(emailInput, { target: { value: "invalid mail" } });
  const submitButton = screen.getByTestId("submitButton");
  fireEvent.click(submitButton);
  await waitFor(() => {
    const invalidEmailMsg = screen.getByText(/email must be a valid email/i);
    expect(invalidEmailMsg).toBeInTheDocument();
  });
});
