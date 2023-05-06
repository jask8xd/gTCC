import { expect, it } from "vitest";
import { getDataToShow } from "./getDataToShow";
import { apiResponse } from "../mocks/apiResponse";
import { searchListEventsFromApiResponse } from "../mocks/searchListEventsFromApiResponse";

it("should return data with the properties to show correctly in searchList", () => {
  const data = getDataToShow(apiResponse);

  expect(data).toEqual(searchListEventsFromApiResponse);
});
