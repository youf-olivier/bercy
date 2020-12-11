import React from "react";
import ReactDOM from "react-dom";
import fetchMock from "fetch-mock";
import "@axa-fr/react-toolkit-all/dist/style/bootstrap/grid.css";
import "@axa-fr/react-toolkit-all/dist/style/bootstrap/reboot.css";
import "@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css";
import "@axa-fr/react-toolkit-all/dist/style/af-components.css";
import App from "layout/App/App";

fetchMock.config.fallbackToNetwork = true;
fetchMock.get(
  "/Slices?year=2020",
  [
    { low: 0, high: 10064, rate: 0 },
    { low: 10065, high: 25659, rate: 14 },
    { low: 25660, high: 73339, rate: 30 }
  ],
  {
    delay: 1000 // fake a slow network
  }
);
fetchMock.get(
  "/Slices?year=2019",
  [
    { low: 0, high: 10064, rate: 0 },
    { low: 10065, high: 27794, rate: 14 },
    { low: 27795, high: 74517, rate: 30 }
  ],
  {
    delay: 1000 // fake a slow network
  }
);
fetchMock.post(
  "/TaxComputer",
  { amount: 12837, marginalTaxRate: 12.83 },
  {
    delay: 1000 // fake a slow network
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
