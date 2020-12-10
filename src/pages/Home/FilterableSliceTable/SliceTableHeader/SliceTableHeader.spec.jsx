import { render } from "@testing-library/react";
import { SliceTableHeader } from "pages/Home/FilterableSliceTable/SliceTableHeader/SliceTableHeader";

describe("Should render Table Header", () => {
  it("SnapShot testing", () => {
    const { asFragment } = render(
      <table>
        <SliceTableHeader />
      </table>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
