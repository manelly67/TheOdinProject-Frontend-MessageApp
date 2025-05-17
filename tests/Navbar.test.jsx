import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../src/components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar small screen", () => {
  it("small screen", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/main_app"]}>
        <Navbar screenWidth={390} />
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
});
