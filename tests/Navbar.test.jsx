import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../src/components/Navbar";
import SingUp from "../src/components/SignUp";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "../src/components/Login";

describe("Navbar small screen", () => {
  it("small screen", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/main_app"]}>
        <Navbar screenWidth={390} token={null} />
      </MemoryRouter>
    );
    // in small screen get a button instead a navbar
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toBe(1);

    const button = screen.getByRole("button");
    // when click the button navbar appears
    await user.click(button);
    expect(screen.queryByRole("navigation")).toBeInTheDocument();
  });

  it("simulates routing behavior - Sign Up", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navbar screenWidth={900} token={null} />} />
          <Route path="/sign_up" element={<SingUp />} />
        </Routes>
      </MemoryRouter>
    );
    const sign_up = screen.getByRole("link", { name: /sign up/i });
    await user.click(sign_up);
    expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
  });

  it("simulates routing behavior - Login", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navbar screenWidth={900} token={null} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );
    const login = screen.getByRole("link", { name: /login/i });
    await user.click(login);
    expect(screen.getByText(/Login/)).toBeInTheDocument();
  });
});
