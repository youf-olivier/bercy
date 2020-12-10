const { computeTaxeService } = require("shared/taxComputer.helper");

describe("TaxComputers tests suite", () => {
  it("computeTaxeService shoudl returns correct resulm", () => {
    const result = computeTaxeService(123123, 2, 3, 2019);
    expect(result).toEqual({
      numberOfShares: 4,
      taxAmount: 15263,
      taxRate: 12.39,
    });
  });

  it("Shoudl call myFunction", () => {
    const mock = jest.fn(() => {
      return 4;
    });
    const result = computeTaxeService(123123, 2, 3, 2019, mock);
    expect(result).toEqual({
      numberOfShares: 4,
      taxAmount: 15263,
      taxRate: 12.39,
    });
    expect(mock).toBeCalledWith("toto");
  });
});
