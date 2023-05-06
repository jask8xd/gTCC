import { describe, expect, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

describe("SearchInputComponent", () => {
  it("should call onChange when the input value changes", () => {
    const onChange = vi.fn();
    const { getByRole } = render(<SearchInput onChange={onChange} />);
    const input = getByRole("textbox");
    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toBeCalledTimes(1);
    expect(input.value).toBe("test");
  });
});
