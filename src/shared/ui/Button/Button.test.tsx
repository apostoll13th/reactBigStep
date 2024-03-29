import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";
import '@testing-library/jest-dom'
import { ButtonTheme } from "shared/ui/Button/Button";
describe("button", () => {
  test("without mods", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument()
  });
  test("check class clear", () => {
    render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear')
  });
});

