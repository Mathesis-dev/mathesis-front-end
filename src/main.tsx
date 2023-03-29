import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import styled from "@emotion/styled";
import "@fontsource/fira-sans";
import routes from "./routes/routes";
import { theme } from "./theme";

const AppContainer = styled.div`
  font-family: "Fira Sans";
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppContainer>
        <RouterProvider router={routes} />
      </AppContainer>
    </ChakraProvider>
  </React.StrictMode>
);
