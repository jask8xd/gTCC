import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { Search } from "./Search";
vi.useFakeTimers();
describe("Search", () => {
  it("should render correctly", () => {
    const { getByRole, getByAltText } = render(<Search />);
    const logo = getByAltText("gameTimeLogo");
    const input = getByRole("textbox");
    expect(logo).toBeDefined();
    expect(input).toBeDefined();
  });
});
