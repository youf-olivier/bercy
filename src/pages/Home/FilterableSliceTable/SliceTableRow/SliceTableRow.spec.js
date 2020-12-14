import React from "react";
import { render } from "@testing-library/react";
import { SliceTableRow } from "pages/Home/FilterableSliceTable/SliceTableRow/SliceTableRow";

describe("SliceTableRow tests suite", () => {
  it("SliceTableRow should render without crashing", () => {
    // 🎯 Ici On va faire notre premier snapshot.
    const { container } = render(
      <SliceTableRow lowBorn="200" highBorn="50000" rate="2" />
    );
    expect(container).toMatchSnapshot();
  });
});
