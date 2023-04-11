import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import { Sidebar } from "./Sidebar";
import {componentRender} from "shared/lib/test/ComponentWithRender";


describe("sidebar", () => {
  test("render", () => {
    componentRender(<Sidebar></Sidebar>);
    expect(screen.getByTestId("Sidebar")).toBeInTheDocument()
  });
  test('test toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});



