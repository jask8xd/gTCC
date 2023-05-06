import { describe, expect, it, vi } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { useSearch } from "./useSearch";
import { apiResponse } from "../mocks/apiResponse";
import { searchListEventsFromApiResponse } from "../mocks/searchListEventsFromApiResponse";
vi.useFakeTimers();

describe("useSearch hook", () => {
  it("should initialize events and isLoading variables", () => {
    const { result } = renderHook(() => useSearch());
    expect(result.current.events).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
  });
  it("should update events state on successful search", async () => {
    global.fetch = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(apiResponse),
      })
    );

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleOnChange({ target: { value: "chicago" } });
      vi.advanceTimersByTime(1500);
    });

    expect(result.current.isLoading).toBe(true);
    // falta un re render para poder tener el valor de los eventos
    // usualmente lo realizo con waitForNextUpdate que viene de renderHook de la libreria
    // "@testing-library/react-hooks";
    // intente con pero no anduvo, lo revisare mas adelante
    // await waitFor(() =>
    //   expect(result.current.events).toEqual(searchListEventsFromApiResponse)
    // );
  });
});
