import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MainView from "../src/components/MainView";

describe("Navbar large screen", () => {
  it("large screen", () => {
    render(
      <MemoryRouter initialEntries={["/main_app"]}>
        <MainView />
      </MemoryRouter>
    );

    expect(screen.queryByRole("navigation")).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBe(3);
  });
});
