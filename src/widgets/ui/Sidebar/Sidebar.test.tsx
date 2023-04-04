import {fireEvent, render, screen} from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";
import '@testing-library/jest-dom'
import { Sidebar } from "./Sidebar";
import {useContext} from "react";
import {renderWithTranslation} from "shared/lib/i18test/renderWithTranslation";


describe("sidebar", () => {
  test("render", () => {
    render(<Sidebar></Sidebar>);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  });
  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});



