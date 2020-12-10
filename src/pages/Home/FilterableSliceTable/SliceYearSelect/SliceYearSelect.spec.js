import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { SliceYearSelect } from "pages/Home/FilterableSliceTable/SliceYearSelect/SliceYearSelect";

describe("Test of the select componenent", () => {
  it("Should call onSelect when change select item ", () => {
    const setSelectedYear = jest.fn();
    render(
      <SliceYearSelect selectedYear="2020" setSelectedYear={setSelectedYear} />
    );
    user.selectOptions(screen.getByRole("combobox"), "2019");

    expect(setSelectedYear).toBeCalledWith("2019");
  });
});
