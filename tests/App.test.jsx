import { describe, it, expect } from 'vitest';
import { render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App.jsx";


describe("App Component", () => {
    it("display the page", () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );
  
      expect(screen.getByText(/testing initial page/i)).toBeInTheDocument();
    });
});