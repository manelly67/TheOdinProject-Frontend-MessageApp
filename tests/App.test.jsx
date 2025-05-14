import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  MemoryRouter,
} from "react-router-dom";
import App from "../src/App.jsx";
import ErrorPage from "../src/components/Error_page.jsx";

describe("App Component", () => {
  it("display the page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("ON/OFF", { exact: false })).toBeInTheDocument();
  });

  it("display error page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link').length).toBe(1);
    expect(screen.getByText("Oh no, this route", { exact: false })).toBeInTheDocument();
  });
});
