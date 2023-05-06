import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { SearchList } from "./SearchList";
import { searchListEventsShort } from "../../mocks/searchListEventsShort";

describe("SearchListComponent", () => {
  it("renders loading message when isLoading prop is true", () => {
    const { getByText } = render(<SearchList events={[]} isLoading={true} />);
    const loadingMessage = getByText(/Cargando .../i);
    expect(loadingMessage).toBeDefined();
  });
  it("renders events list when events prop is not empty", () => {
    const { getByText, getByAltText } = render(
      <SearchList events={searchListEventsShort} isLoading={false} />
    );
    const event1Title = getByText(/Event 1/i);
    const event1Subtitle = getByText(/Subtitle 1/i);
    const event2Title = getByText(/Event 2/i);
    const event2Subtitle = getByText(/Subtitle 2/i);
    const event1Image = getByAltText(/Event 1/i);
    const event2Image = getByAltText(/Event 2/i);
    expect(event1Title).toBeDefined();
    expect(event1Subtitle).toBeDefined();
    expect(event2Title).toBeDefined();
    expect(event2Subtitle).toBeDefined();
    expect(event1Image).toHaveProperty("src", "image1.jpg");
    expect(event2Image).toHaveProperty("src", "image2.jpg");
  });
});
