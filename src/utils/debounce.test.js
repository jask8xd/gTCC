import { expect, it, vi } from "vitest";
import { debounce } from "./debounce";
vi.useFakeTimers();
it("should debounce the function", () => {
  const func = vi.fn();
  const debouncedFunc = debounce(func, 100);

  debouncedFunc();
  debouncedFunc();
  debouncedFunc();

  vi.advanceTimersByTime(200);

  expect(func).toBeCalledTimes(1);
});
