import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App/> component", () => {
  it("renders", () => {
    render(<App />);
  });

  it("header component check", () => {
    render(<App />);

    const header = screen.getByText("LOTR Project");

    expect(header).toBeDefined();
  });
});
