import { render, screen } from "@testing-library/react";
import { TaxResult } from "./TaxResult";

describe("Tax Result test suite", () => {
  it("SnapShot testing", () => {
    const { asFragment } = render(
      <TaxResult taxRate="34" taxAmount="3444" numberOfShares="2" />
    );
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getAllByRole("definition")[0]).toHaveTextContent("34 %");
    expect(screen.getAllByRole("definition")[1]).toHaveTextContent("3444 €");
    expect(screen.getAllByRole("definition")[2]).toHaveTextContent("2");
  });
});
