import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";



const customRender = (
  ui,
  { ...renderOptions } = {}
) =>
  render(
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {ui}
      </ThemeProvider>
    </BrowserRouter>,
    renderOptions
  );

export * from "@testing-library/react";
export { customRender as render };